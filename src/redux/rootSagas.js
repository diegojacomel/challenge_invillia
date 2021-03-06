/* Effects */
import { all } from 'redux-saga/effects';

import { peopleSagas } from './people/sagas';

export default function* rootSagas() {
    // here we initialize all the sagas from different files
    yield all([
        ...peopleSagas,
    ]);
}