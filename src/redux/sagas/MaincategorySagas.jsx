import { put, takeEvery} from "redux-saga/effects"
import { CREATE_MAINCATEGORY, CREATE_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from "../Constants"
import {  createRecordAPI, deleteRecordAPI, getRecordAPI,  updateRecordAPI } from "./APICallingService/index"


function* createSaga(action) {                                                              // worker saga
    let response = yield createRecordAPI("maincategory", action.payload)                   // used when payload has no file field
    // let response = yield createMultipartRecordAPI("maincategory", action.payload)       // used when payload has file field
    yield put({ type: CREATE_MAINCATEGORY_RED, payload: response })
}

function* getSaga() {
    let response = yield getRecordAPI("maincategory")
    yield put({ type: GET_MAINCATEGORY_RED, payload: response })
}


function* upadteSaga(action) {
    yield updateRecordAPI("maincategory")
    yield put({ type: UPDATE_MAINCATEGORY_RED, payload: action.payload })

    // let response = yield updateMultipartRecordAPI("maincategory", action.payload)
    // yield put({ type: UPDATE_MAINCATEGORY_RED, payload: response })


}

function* deleteSaga() {
    let response = yield deleteRecordAPI("maincategory")
    yield put({ type: DELETE_MAINCATEGORY_RED, payload: response })
}


export default function* MaincategorySagas() {
    yield takeEvery(CREATE_MAINCATEGORY, createSaga)
    yield takeEvery(GET_MAINCATEGORY, getSaga)
    yield takeEvery(UPDATE_MAINCATEGORY, upadteSaga)
    yield takeEvery(DELETE_MAINCATEGORY, deleteSaga)

}