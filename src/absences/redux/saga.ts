import { takeLatest, put, delay, cancelled } from 'redux-saga/effects'
import * as absences from '../../api/json_files/absences.json'

function* absencesSaga() {
  const abortController = new AbortController()
  try {
    const absencesData = yield delay(250, absences.payload)
    yield put({ type: 'FETCH_ABSENCES', payload: absencesData })
  } catch (e) {
    if (yield cancelled()) abortController.abort()
    yield put({ type: 'ABSENCES_ERROR', payload: e })
  }
}

export function* absencesWatcher() {
  yield takeLatest('GET_ABSENCES', absencesSaga)
}
