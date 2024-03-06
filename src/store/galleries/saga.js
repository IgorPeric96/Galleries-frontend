import { takeLatest, call, put } from 'redux-saga/effects';
import { startFetchGalleries, galleriesFetched, galleriesFetchError } from './slice'; 
import GalleriesService from '../../services/galleries.service'; 
function* fetchGalleriesSaga() {
    try {
        const galleries = yield call(GalleriesService.getAllGalleries);
        yield put(galleriesFetched(galleries));
    } catch (error) {
        yield put(galleriesFetchError(error.message));
    }
}

export default function* galleriesSaga() {
    yield takeLatest(startFetchGalleries.type, fetchGalleriesSaga);
}
