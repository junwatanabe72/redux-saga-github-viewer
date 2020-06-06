import { call, put, takeLatest, all, delay } from 'redux-saga/effects';
import {
  ISSUE_REQUESTED,
  ISSUE_POSTREQUESTED,
  ISSUE_PUTREQUESTED,
  addIssue,
  addUser,
  USER_REQUESTED,
} from '../actions/index';
import { getAxios, postAxios, putAxios, getUserAxios } from '../service/Axios';

export function* getIssueAsync(action) {
  const { data } = yield call(getAxios, action.payload);
  yield put(addIssue(data.data));
  return;
}

export function* postIssueAsync(action) {
  yield call(postAxios, action.payload);
  return;
}

export function* putIssueAsync(action) {
  yield console.log(action.payload);
  yield delay(2000);
  yield call(putAxios, action.payload);
  return;
}

export function* getUserAsync() {
  const { data } = yield call(getUserAxios);
  yield put(addUser(data.data));
  return;
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(ISSUE_REQUESTED, getIssueAsync),
    yield takeLatest(ISSUE_POSTREQUESTED, postIssueAsync),
    yield takeLatest(ISSUE_PUTREQUESTED, putIssueAsync),
    yield takeLatest(USER_REQUESTED, getUserAsync),
  ]);
}

//
