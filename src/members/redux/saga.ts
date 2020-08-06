import { takeLatest, put, delay, cancelled } from 'redux-saga/effects'
import * as members from '../../api/json_files/members.json'

function* membersSaga() {
  const abortController = new AbortController()
  try {
    const membersData = yield delay(250, members.payload)
    yield put({ type: 'FETCH_MEMBERS', payload: membersData })
  } catch (e) {
    if (yield cancelled()) abortController.abort()
    yield put({ type: 'MEMBERS_ERROR', payload: e })
  }
}

export function* membersWatcher() {
  yield takeLatest('GET_MEMBERS', membersSaga)
}
