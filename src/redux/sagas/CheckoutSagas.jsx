import { put, takeEvery} from "redux-saga/effects"
import { CREATE_CHECKOUT, CREATE_CHECKOUT_RED, DELETE_CHECKOUT, DELETE_CHECKOUT_RED, GET_CHECKOUT, GET_CHECKOUT_RED, UPDATE_CHECKOUT, UPDATE_CHECKOUT_RED } from "../Constants"
import {  createRecordAPI, deleteRecordAPI, getRecordAPI,  updateRecordAPI } from "./APICallingService/index"


function* createSaga(action) {                                                              // worker saga
    let response = yield createRecordAPI("checkout", action.payload)                   // used when payload has no file field
    // let response = yield createMultipartRecordAPI("checkout", action.payload)       // used when payload has file field
    yield put({ type: CREATE_CHECKOUT_RED, payload: response })
}

function* getSaga() {
    let response = yield getRecordAPI("checkout")
    yield put({ type: GET_CHECKOUT_RED, payload: response })
}


function* upadteSaga(action) {
    yield updateRecordAPI("checkout")
    yield put({ type: UPDATE_CHECKOUT_RED, payload: action.payload })

    // let response = yield updateMultipartRecordAPI("checkout", action.payload)
    // yield put({ type: UPDATE_CHECKOUT_RED, payload: response })


}

function* deleteSaga() {
    let response = yield deleteRecordAPI("checkout")
    yield put({ type: DELETE_CHECKOUT_RED, payload: response })
}


export default function* CheckoutSagas() {
    yield takeEvery(CREATE_CHECKOUT, createSaga)
    yield takeEvery(GET_CHECKOUT, getSaga)
    yield takeEvery(UPDATE_CHECKOUT, upadteSaga)
    yield takeEvery(DELETE_CHECKOUT, deleteSaga)

}