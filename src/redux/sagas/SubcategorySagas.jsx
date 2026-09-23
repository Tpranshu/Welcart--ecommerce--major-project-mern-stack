import { put, takeEvery} from "redux-saga/effects"
import { CREATE_SUBCATEGORY, CREATE_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED } from "../Constants"
import {  createRecordAPI, deleteRecordAPI, getRecordAPI,  updateRecordAPI } from "./APICallingService/index"


function* createSaga(action) {                                                              // worker saga
    let response = yield createRecordAPI("subcategory", action.payload)                   // used when payload has no file field
    // let response = yield createMultipartRecordAPI("subcategory", action.payload)       // used when payload has file field
    yield put({ type: CREATE_SUBCATEGORY_RED, payload: response })
}

function* getSaga() {
    let response = yield getRecordAPI("subcategory")
    yield put({ type: GET_SUBCATEGORY_RED, payload: response })
}


function* upadteSaga(action) {
    yield updateRecordAPI("subcategory")
    yield put({ type: UPDATE_SUBCATEGORY_RED, payload: action.payload })

    // let response = yield updateMultipartRecordAPI("subcategory", action.payload)
    // yield put({ type: UPDATE_SUBCATEGORY_RED, payload: response })


}

function* deleteSaga() {
    let response = yield deleteRecordAPI("subcategory")
    yield put({ type: DELETE_SUBCATEGORY_RED, payload: response })
}


export default function* SubcategorySagas() {
    yield takeEvery(CREATE_SUBCATEGORY, createSaga)
    yield takeEvery(GET_SUBCATEGORY, getSaga)
    yield takeEvery(UPDATE_SUBCATEGORY, upadteSaga)
    yield takeEvery(DELETE_SUBCATEGORY, deleteSaga)

}