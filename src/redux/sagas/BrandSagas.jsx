import { put, takeEvery} from "redux-saga/effects"
import { CREATE_BRAND, CREATE_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../Constants"
import {  createRecordAPI, deleteRecordAPI, getRecordAPI,  updateRecordAPI } from "./APICallingService/index"


function* createSaga(action) {                                                              // worker saga
    let response = yield createRecordAPI("brand", action.payload)                   // used when payload has no file field
    // let response = yield createMultipartRecordAPI("brand", action.payload)       // used when payload has file field
    yield put({ type: CREATE_BRAND_RED, payload: response })
}

function* getSaga() {
    let response = yield getRecordAPI("brand")
    yield put({ type: GET_BRAND_RED, payload: response })
}


function* upadteSaga(action) {
    yield updateRecordAPI("brand")
    yield put({ type: UPDATE_BRAND_RED, payload: action.payload })

    // let response = yield updateMultipartRecordAPI("brand", action.payload)
    // yield put({ type: UPDATE_BRAND_RED, payload: response })


}

function* deleteSaga() {
    let response = yield deleteRecordAPI("brand")
    yield put({ type: DELETE_BRAND_RED, payload: response })
}


export default function* BrandSagas() {
    yield takeEvery(CREATE_BRAND, createSaga)
    yield takeEvery(GET_BRAND, getSaga)
    yield takeEvery(UPDATE_BRAND, upadteSaga)
    yield takeEvery(DELETE_BRAND, deleteSaga)

}