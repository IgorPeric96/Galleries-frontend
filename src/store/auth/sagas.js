import { takeLatest, call, put } from 'redux-saga/effects';
import {
    loginUserRequest, loginUserSuccess, loginUserFailure,
    registerUserRequest, registerUserSuccess, registerUserFailure
} from './actions';
import AuthService from '../../services/auth.service';

function* loginUserSaga(action) {
    try {
        const user = yield call(AuthService.login, action.payload);
        yield put(loginUserSuccess(user));
    } catch (error) {
        yield put(loginUserFailure(error.message));
    }
}

function* registerUserSaga(action) {
    console.log("nvm");
    try {
        const user = yield call(AuthService.register, action.payload);
        yield put(registerUserSuccess(user));
    } catch (error) {
        yield put(registerUserFailure(error.message));
    }
}

export default function* authSaga() {
    yield takeLatest(loginUserRequest().type, loginUserSaga);
    yield takeLatest(registerUserRequest().type, registerUserSaga);
}
