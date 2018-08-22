import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import mainLoading from './Interface/MainLoading/reducer'
import {authReducer} from './Interface/User/SignIn/reducer'
import {modalSuccess} from './Interface/Modals/ModalSuccess/reducer'

const rootReducer = combineReducers({
    modals:modalSuccess,
    user: authReducer,
    mainLoading,
    form: reduxFormReducer
})

export default rootReducer