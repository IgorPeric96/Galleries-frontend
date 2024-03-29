import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import galleriesReducer from "./galleries/slice";
import authReducer from "./auth/reducers";
import rootSaga from "./sagas"; 

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        galleries: galleriesReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

