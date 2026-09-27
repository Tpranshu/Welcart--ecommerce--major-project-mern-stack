import { put, takeEvery } from "redux-saga/effects"
import { CREATE_SETTING, CREATE_SETTING_RED, DELETE_SETTING, DELETE_SETTING_RED, GET_SETTING, GET_SETTING_RED, UPDATE_SETTING, UPDATE_SETTING_RED } from "../Constants"
import { createRecordAPI, deleteRecordAPI, getRecordAPI, updateRecordAPI } from "./APICallingService/index"


function* createSaga(action) {                                                              // worker saga
    let response = yield createRecordAPI("setting", action.payload)                   // used when payload has no file field
    // let response = yield createMultipartRecordAPI("setting", action.payload)       // used when payload has file field
    yield put({ type: CREATE_SETTING_RED, payload: response })
}

function* getSaga() {
    let response = yield getRecordAPI("setting")
    yield put({ type: GET_SETTING_RED, payload: response })
}


// function* upadteSaga(action) {
//     yield updateRecordAPI("setting")
//     yield put({ type: UPDATE_SETTING_RED, payload: action.payload })

//     // let response = yield updateMultipartRecordAPI("setting", action.payload)
//     // yield put({ type: UPDATE_SETTING_RED, payload: response })


// }

function* upadteSaga(action) {

    let response = yield updateRecordAPI("setting", action.payload)

    yield put({ type: UPDATE_SETTING_RED, payload: response })

}

function* deleteSaga() {
    let response = yield deleteRecordAPI("setting")
    yield put({ type: DELETE_SETTING_RED, payload: response })
}


export default function* SettingSagas() {
    yield takeEvery(CREATE_SETTING, createSaga)
    yield takeEvery(GET_SETTING, getSaga)
    yield takeEvery(UPDATE_SETTING, upadteSaga)
    yield takeEvery(DELETE_SETTING, deleteSaga)

}