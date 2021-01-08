import { 
    IsLoggedInSuccessAction,
    IsLoggedInFailureAction, 
    IsLoggedOutSuccessAction,
    SignUpSuccessAction,
    SignUpFailureAction, 
} from './action'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'

// Private functions
function fetchLogin(data: {email: string, password: string}) {
    return axios.post('http://localhost:5000/api/login', data)
}

function fetchLogout() {
    return axios.post('http://localhost:5000/api/logout')
}

function fetchRegister(data: {email: string, password: string}) {
    const { email, password } = data;
    const user = {
        email,
        password,
        job_title: "Student",
        nickname: "Aboy96"
    }
    return axios.post('http://localhost:5000/api/signup', user)
}
// Saga functions
export function* loggedInCall(action: any) {
    const response = yield call(fetchLogin, action.payload)
    const code = response.status
    if (code === 200) {
        yield put(IsLoggedInSuccessAction())
    } else {
        yield put(IsLoggedInFailureAction())
    }
}

export function* signUpCall(action: any) {
    const response = yield call(fetchRegister, action.payload)
    const code = response.status
    if (code === 200) {
        yield put(SignUpSuccessAction())
    } else {
        yield put(SignUpFailureAction())
    }
}


export function* loggedOutCall() {
    yield call(fetchLogout)
    yield put(IsLoggedOutSuccessAction())
}


