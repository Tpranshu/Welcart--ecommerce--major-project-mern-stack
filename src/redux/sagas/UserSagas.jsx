import { put, takeEvery} from "redux-saga/effects"
import { CREATE_USER, CREATE_USER_RED, DELETE_USER, DELETE_USER_RED, GET_USER, GET_USER_RED, UPDATE_USER, UPDATE_USER_RED } from "../Constants"
import {  createRecordAPI, deleteRecordAPI, getRecordAPI,  updateRecordAPI } from "./APICallingService/index"


function* createSaga(action) {                                                              // worker saga
    let response = yield createRecordAPI("user", action.payload)                   // used when payload has no file field
    // let response = yield createMultipartRecordAPI("user", action.payload)       // used when payload has file field
    yield put({ type: CREATE_USER_RED, payload: response })
}

function* getSaga() {
    let response = yield getRecordAPI("user")
    yield put({ type: GET_USER_RED, payload: response })
}


function* upadteSaga(action) {
    yield updateRecordAPI("user")
    yield put({ type: UPDATE_USER_RED, payload: action.payload })

    // let response = yield updateMultipartRecordAPI("user", action.payload)
    // yield put({ type: UPDATE_USER_RED, payload: response })


}

function* deleteSaga() {
    let response = yield deleteRecordAPI("user")
    yield put({ type: DELETE_USER_RED, payload: response })
}


export default function* UserSagas() {
    yield takeEvery(CREATE_USER, createSaga)
    yield takeEvery(GET_USER, getSaga)
    yield takeEvery(UPDATE_USER, upadteSaga)
    yield takeEvery(DELETE_USER, deleteSaga)

}