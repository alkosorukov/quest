import { fork, all } from 'redux-saga/effects'
import {authorizeSaga, authorizeWithTokenSaga} from './Interface/User/SignIn/saga' 
import {editUserSaga} from './Interface/User/EditUser/saga' 

export default function* rootSaga() {
    yield all([
        fork(authorizeSaga),
        fork(authorizeWithTokenSaga),
        fork(editUserSaga)
    ])
}