import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"

import RootReducer from "./Reducers/RootReducer";
import RootSaga from "./sagas/RootSaga";

const saga = createSagaMiddleware()

const Store = configureStore({
    reducer: RootReducer,
    middleware: ()=> [saga]  // yaha middleware ko direct pass nhi kr skte hai, hame middleware ko call back ke through hi pass krna padega qki redux synchronous nature ka hota hai and api calling asynchronous nature ka isliye hame middleware ko call back function ke through pass krna padega taki jab middleware ki required ho tabhi hi middleware chle

})

export default Store

saga.run(RootSaga)


