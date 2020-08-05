import {all} from 'redux-saga/effects'
import {absencesWatcher} from '../absences/redux'

export function* rootSaga() {
  yield all([absencesWatcher()])
}
