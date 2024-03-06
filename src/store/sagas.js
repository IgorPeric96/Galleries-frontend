import { all } from 'redux-saga/effects';
import galleriesSaga from './galleries/saga';
import authSaga from './auth/sagas';

export default function* rootSaga() {
    yield all([
        galleriesSaga(),
        authSaga(),
    ]);
}
