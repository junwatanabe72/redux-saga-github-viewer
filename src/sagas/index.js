import { call, put, delay, takeLatest, all } from 'redux-saga/effects';
import { ISSUE_REQUESTED, ISSUE_POSTREQUESTED, addIssue } from '../actions/index';
import { getAxios, postAxios } from '../service/Axios';
// import rootSaga from '../../../redux-saga-beginner-tutorial/sagas';

// function* fetchUser(action) {
//   try {
//     const user = yield call(fetchUser, action.payload.userId);
//     yield put({ type: 'USER_FETCH_SUCCEEDED', user: user });
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message });
//   }
// }

export function* getIssueAsync(action) {
  const { data } = yield call(getAxios, action.payload);
  yield delay(10000);
  yield console.log(data.data);
  yield put(addIssue(data.data));
  return;
}

export function* postIssueAsync(action) {
  const { data } = yield call(postAxios, action.payload);

  yield console.log(data);
  yield delay(20000);
  yield put(addIssue(data.data));
  return;
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(ISSUE_REQUESTED, getIssueAsync),
    yield takeLatest(ISSUE_POSTREQUESTED, postIssueAsync),
  ]);
}

//
