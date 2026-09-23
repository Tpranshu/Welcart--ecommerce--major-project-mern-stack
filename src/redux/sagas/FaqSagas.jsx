
import { put, takeEvery } from "redux-saga/effects"

import { CREATE_FAQ, CREATE_FAQ_RED, DELETE_FAQ, DELETE_FAQ_RED, GET_FAQ, GET_FAQ_RED, UPDATE_FAQ, UPDATE_FAQ_RED } from "../Constants"

import { createRecordAPI, deleteRecordAPI, getRecordAPI, updateRecordAPI } from "./APICallingService/index"



function* createSaga(action) {                                      // worker saga

    let response = yield createRecordAPI("faq", action.payload)     // used when payload has no file field
    // let response = yield createMultipartRecordAPI("faq", action.payload)       // used when payload has file field

    yield put({ type: CREATE_FAQ_RED, payload: response })

}

function* getSaga() {

    let response = yield getRecordAPI("faq")

    yield put({ type: GET_FAQ_RED, payload: response })

}



function* upadteSaga(action) {

    let response = yield updateRecordAPI("faq", action.payload)

    yield put({ type: UPDATE_FAQ_RED, payload: response })

    // let response = yield updateMultipartRecordAPI("faq", action.payload)
    // yield put({ type: UPDATE_FAQ_RED, payload: response })



}

function* deleteSaga(action) {

    let response = yield deleteRecordAPI("faq", action.payload)

    yield put({ type: DELETE_FAQ_RED, payload: response })

}



export default function* FaqSagas() {

    yield takeEvery(CREATE_FAQ, createSaga)

    yield takeEvery(GET_FAQ, getSaga)

    yield takeEvery(UPDATE_FAQ, upadteSaga)

    yield takeEvery(DELETE_FAQ, deleteSaga)

}
