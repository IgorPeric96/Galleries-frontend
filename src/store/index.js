// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import galleriesReducer from "./galleries/slice";
// import rootSaga from "./sagas";

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//     reducer: galleriesReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),

// });

// sagaMiddleware.run(galleriesSaga);

// export default store;

// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import galleriesReducer from "./galleries/slice";
import rootSaga from "./sagas"; // Importujete rootSaga

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        galleries: galleriesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga); // Pokrenite rootSaga koja sadrži sve saga radnike

export default store;

