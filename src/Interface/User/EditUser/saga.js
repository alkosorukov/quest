import { SubmissionError } from 'redux-form'
import { call, put, takeLatest } from 'redux-saga/effects'
import { EDIT_USER_SUCCESS, EDIT_USER_REQUEST } from './actions'
import {actions} from '../../Modals/ModalSuccess/Index'

import editUserApi from './editUserApi'

function* editUser({ payload: { oldPassword, password, confirmPassword, token, resolve, reject, resetForm } }) {

    try {
        const result = yield call(editUserApi.editUser, { oldPassword, password, confirmPassword }, token)
        const { errors, token: newToken } = result
        if (errors) {
            reject(new SubmissionError(errors))
        } else {
            yield console.log('yourNewPassword', result)
            yield put({ type: EDIT_USER_SUCCESS, payload: { password, token: newToken } })
            resetForm()
            resolve()
            // actions.showModals({text:'lala'})
            yield put(actions.showModals({text:'Ваш пароль успешно изменен'}))
        }
    } catch (error) {
        throw new Error('Невозможно изменить пароль')
    }
}

export function* editUserSaga() {
    yield takeLatest(EDIT_USER_REQUEST, editUser)
}