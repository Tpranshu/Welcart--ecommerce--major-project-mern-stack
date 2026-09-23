import { put, takeEvery } from "redux-saga/effects"

import { CREATE_FEATURE, CREATE_FEATURE_RED, DELETE_FEATURE, DELETE_FEATURE_RED, GET_FEATURE, GET_FEATURE_RED, UPDATE_FEATURE, UPDATE_FEATURE_RED } from "../Constants"

import { createRecordAPI, deleteRecordAPI, getRecordAPI, updateRecordAPI } from "./APICallingService/index"



function* createSaga(action) {                                      // worker saga

    let response = yield createRecordAPI("feature", action.payload) // used when payload has no file field
    // let response = yield createMultipartRecordAPI("feature", action.payload)       // used when payload has file field

    yield put({ type: CREATE_FEATURE_RED, payload: response })

}

function* getSaga() {

    let response = yield getRecordAPI("feature")

    yield put({ type: GET_FEATURE_RED, payload: response })

}



function* upadteSaga(action) {

    yield updateRecordAPI("feature", action.payload)
    yield put({ type: UPDATE_FEATURE_RED, payload: action.payload })
    // let response = yield updateMultipartRecordAPI("feature", action.payload)
    // yield put({ type: UPDATE_FEATURE_RED, payload: response })



}

function* deleteSaga(action) {

    let response = yield deleteRecordAPI("feature", action.payload)

    yield put({ type: DELETE_FEATURE_RED, payload: response })

}



export default function* FeatureSagas() {

    yield takeEvery(CREATE_FEATURE, createSaga)

    yield takeEvery(GET_FEATURE, getSaga)

    yield takeEvery(UPDATE_FEATURE, upadteSaga)

    yield takeEvery(DELETE_FEATURE, deleteSaga)

}