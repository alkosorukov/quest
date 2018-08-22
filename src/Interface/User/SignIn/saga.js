import { SubmissionError } from 'redux-form'
import { call, put, takeLatest } from 'redux-saga/effects'
import { AUTH_SUCCESS, AUTH_REQUEST, AUTH_REQUEST_TOKEN } from './actions'


import authApi from './authApi'

function* authorize({ payload: { username, password, resolve, reject } }) {

    try {
        const result = yield call(authApi.authUser, { username, password })
        const {errors, email, id, role, token, username: userName } = result
        if (errors) {
            reject(new SubmissionError(errors))
        } else {
            yield put({ type: AUTH_SUCCESS, payload: { email, id, role, token, userName } })
            localStorage.setItem('token', token)
            resolve()
        }
    } catch (error) {
        throw new Error('Невозможно авторизоваться')
    }
}

function* authorizeWithToken({ payload: { token } }) {

    try {

        const { email, id, role, token: userToken, username: userName } = yield call(authApi.authUserFromToken, token)
        yield put({ type: AUTH_SUCCESS, payload: { email, id, role, token: userToken, userName } })

    } catch (error) {
        throw new Error(`Не удалось получить данные на основе токена ${token}`)
    }
}

export function* authorizeSaga() {
    yield takeLatest(AUTH_REQUEST, authorize)
}

export function* authorizeWithTokenSaga() {
    yield takeLatest(AUTH_REQUEST_TOKEN, authorizeWithToken)
}
