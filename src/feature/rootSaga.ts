import { all, takeEvery } from 'redux-saga/effects'
import { loggedInCall, signUpCall } from './account/saga'

// function* is a generator
function* isLoggedInWatcher() {
    yield takeEvery("IS_LOGGED_IN_CALL", loggedInCall)
}

function* signUpWatcher() {
    yield takeEvery("SIGN_UP_CALL", signUpCall)
}

// Combine all watchers
export function* watcherSaga() {
    yield all([isLoggedInWatcher(), signUpWatcher()])
}