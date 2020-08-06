import {all} from 'redux-saga/effects'
import {absencesWatcher} from '../absences/redux'
import {membersWatcher} from '../members/redux'

export function* rootSaga() {
  yield all([absencesWatcher(), membersWatcher()])
}
