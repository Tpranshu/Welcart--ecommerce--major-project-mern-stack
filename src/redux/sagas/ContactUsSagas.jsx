import { put, takeEvery} from "redux-saga/effects"
import { CREATE_CONTACT_US, CREATE_CONTACT_US_RED, DELETE_CONTACT_US, DELETE_CONTACT_US_RED, GET_CONTACT_US, GET_CONTACT_US_RED, UPDATE_CONTACT_US, UPDATE_CONTACT_US_RED } from "../Constants"
import {  createRecordAPI, deleteRecordAPI, getRecordAPI,  updateRecordAPI } from "./APICallingService/index"


function* createSaga(action) {                                                              // worker saga
    let response = yield createRecordAPI("contactus", action.payload)                   // used when payload has no file field
    // let response = yield createMultipartRecordAPI("contactus", action.payload)       // used when payload has file field
    yield put({ type: CREATE_CONTACT_US_RED, payload: response })
}

function* getSaga() {
    let response = yield getRecordAPI("contactus")
    yield put({ type: GET_CONTACT_US_RED, payload: response })
}


function* upadteSaga(action) {
    yield updateRecordAPI("contactus")
    yield put({ type: UPDATE_CONTACT_US_RED, payload: action.payload })

    // let response = yield updateMultipartRecordAPI("contactus", action.payload)
    // yield put({ type: UPDATE_CONTACT_US_RED, payload: response })


}

function* deleteSaga() {
    let response = yield deleteRecordAPI("contactus")
    yield put({ type: DELETE_CONTACT_US_RED, payload: response })
}


export default function* ContactUsSagas() {
    yield takeEvery(CREATE_CONTACT_US, createSaga)
    yield takeEvery(GET_CONTACT_US, getSaga)
    yield takeEvery(UPDATE_CONTACT_US, upadteSaga)
    yield takeEvery(DELETE_CONTACT_US, deleteSaga)

}