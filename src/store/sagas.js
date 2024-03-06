// src/store/sagas.js
import { all } from 'redux-saga/effects';
import galleriesSaga from './galleries/saga'; // Ovo importuje default eksportovanu saga funkciju iz `galleries/saga.js`

export default function* rootSaga() {
    yield all([
        galleriesSaga(), // Pokrećete galleriesSaga radnika
        // Dodajte ostale saga radnike ako ih imate
    ]);
}
