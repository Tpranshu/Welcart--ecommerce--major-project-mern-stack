import { put, takeEvery} from "redux-saga/effects"
import { CREATE_NEWSLETTER, CREATE_NEWSLETTER_RED, DELETE_NEWSLETTER, DELETE_NEWSLETTER_RED, GET_NEWSLETTER, GET_NEWSLETTER_RED, UPDATE_NEWSLETTER, UPDATE_NEWSLETTER_RED } from "../Constants"
import {  createRecordAPI, deleteRecordAPI, getRecordAPI,  updateRecordAPI } from "./APICallingService/index"


function* createSaga(action) {                                                              // worker saga
    let response = yield createRecordAPI("newsletter", action.payload)                   // used when payload has no file field
    // let response = yield createMultipartRecordAPI("newsletter", action.payload)       // used when payload has file field
    yield put({ type: CREATE_NEWSLETTER_RED, payload: response })
}

function* getSaga() {
    let response = yield getRecordAPI("newsletter")
    yield put({ type: GET_NEWSLETTER_RED, payload: response })
}


function* upadteSaga(action) {
    yield updateRecordAPI("newsletter")
    yield put({ type: UPDATE_NEWSLETTER_RED, payload: action.payload })

    // let response = yield updateMultipartRecordAPI("newsletter", action.payload)
    // yield put({ type: UPDATE_NEWSLETTER_RED, payload: response })


}

function* deleteSaga() {
    let response = yield deleteRecordAPI("newsletter")
    yield put({ type: DELETE_NEWSLETTER_RED, payload: response })
}


export default function* NewsletterSagas() {
    yield takeEvery(CREATE_NEWSLETTER, createSaga)
    yield takeEvery(GET_NEWSLETTER, getSaga)
    yield takeEvery(UPDATE_NEWSLETTER, upadteSaga)
    yield takeEvery(DELETE_NEWSLETTER, deleteSaga)

}