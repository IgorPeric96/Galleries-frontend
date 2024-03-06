import { all } from 'redux-saga/effects';
import galleriesSaga from './galleries/saga';

export default function* rootSaga() {
    yield all([
        galleriesSaga(),
    ]);
}
