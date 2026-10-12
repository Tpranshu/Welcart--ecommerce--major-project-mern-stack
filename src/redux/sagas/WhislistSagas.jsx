import { put, takeEvery} from "redux-saga/effects"
import { CREATE_WHISLIST, CREATE_WHISLIST_RED, DELETE_WHISLIST, DELETE_WHISLIST_RED, GET_WHISLIST, GET_WHISLIST_RED, UPDATE_WHISLIST, UPDATE_WHISLIST_RED } from "../Constants"
import {  createRecordAPI, deleteRecordAPI, getRecordAPI,  updateRecordAPI } from "./APICallingService/index"


function* createSaga(action) {                                                              // worker saga
    let response = yield createRecordAPI("whislist", action.payload)                   // used when payload has no file field
    // let response = yield createMultipartRecordAPI("whislist", action.payload)       // used when payload has file field
    yield put({ type: CREATE_WHISLIST_RED, payload: response })
}

function* getSaga() {
    let response = yield getRecordAPI("whislist")
    yield put({ type: GET_WHISLIST_RED, payload: response })
}


function* upadteSaga(action) {
    yield updateRecordAPI("whislist")
    yield put({ type: UPDATE_WHISLIST_RED, payload: action.payload })

    // let response = yield updateMultipartRecordAPI("whislist", action.payload)
    // yield put({ type: UPDATE_WHISLIST_RED, payload: response })


}

function* deleteSaga() {
    let response = yield deleteRecordAPI("whislist")
    yield put({ type: DELETE_WHISLIST_RED, payload: response })
}


export default function* WhislistSagas() {
    yield takeEvery(CREATE_WHISLIST, createSaga)
    yield takeEvery(GET_WHISLIST, getSaga)
    yield takeEvery(UPDATE_WHISLIST, upadteSaga)
    yield takeEvery(DELETE_WHISLIST, deleteSaga)

}