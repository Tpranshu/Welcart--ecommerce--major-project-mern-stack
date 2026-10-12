import { put, takeEvery } from "redux-saga/effects"
import { CREATE_CART, CREATE_CART_RED, DELETE_CART, DELETE_CART_RED, GET_CART, GET_CART_RED, UPDATE_CART, UPDATE_CART_RED } from "../Constants"
import { createRecordAPI, deleteRecordAPI, getRecordAPI, updateRecordAPI } from "./APICallingService/index"


function* createSaga(action) {                                                              // worker saga
    let response = yield createRecordAPI("cart", action.payload)                   // used when payload has no file field
    // let response = yield createMultipartRecordAPI("cart", action.payload)       // used when payload has file field
    yield put({ type: CREATE_CART_RED, payload: response })
}

function* getSaga() {
    let response = yield getRecordAPI("cart")
    yield put({ type: GET_CART_RED, payload: response })
}


function* upadteSaga(action) {
    yield updateRecordAPI("cart")
    yield put({ type: UPDATE_CART_RED, payload: action.payload })

    // let response = yield updateMultipartRecordAPI("cart", action.payload)
    // yield put({ type: UPDATE_CART_RED, payload: response })


}


function* deleteSaga(action) {
    let response = yield deleteRecordAPI("cart", action.payload.id)
    yield put({ type: DELETE_CART_RED, payload: action.payload })
}


// function* deleteSaga() {
// let response = yield deleteRecordAPI("cart")
// yield put({ type: DELETE_CART_RED, payload: response })

// }


export default function* CartSagas() {
    yield takeEvery(CREATE_CART, createSaga)
    yield takeEvery(GET_CART, getSaga)
    yield takeEvery(UPDATE_CART, upadteSaga)
    yield takeEvery(DELETE_CART, deleteSaga)

}