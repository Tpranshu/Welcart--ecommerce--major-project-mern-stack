import { put, takeEvery } from "redux-saga/effects"
import { CREATE_PRODUCT, CREATE_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from "../Constants"
import { createRecordAPI, deleteRecordAPI, getRecordAPI, updateRecordAPI } from "./APICallingService/index"


function* createSaga(action) {                                                              // worker saga
    let response = yield createRecordAPI("product", action.payload)                   // used when payload has no file field
    // let response = yield createMultipartRecordAPI("product", action.payload)       // used when payload has file field
    yield put({ type: CREATE_PRODUCT_RED, payload: response })
}

function* getSaga() {
    let response = yield getRecordAPI("product")
    yield put({ type: GET_PRODUCT_RED, payload: response })
}


function* upadteSaga(action) {
    yield updateRecordAPI("product")
    yield put({ type: UPDATE_PRODUCT_RED, payload: action.payload })

    // let response = yield updateMultipartRecordAPI("product", action.payload)
    // yield put({ type: UPDATE_PRODUCT_RED, payload: response })


}

function* deleteSaga() {
    let response = yield deleteRecordAPI("product")
    yield put({ type: DELETE_PRODUCT_RED, payload: response })
}


export default function* ProductSagas() {
    yield takeEvery(CREATE_PRODUCT, createSaga)
    yield takeEvery(GET_PRODUCT, getSaga)
    yield takeEvery(UPDATE_PRODUCT, upadteSaga)
    yield takeEvery(DELETE_PRODUCT, deleteSaga)

}