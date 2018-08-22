import { EDIT_USER_SUCCESS, EDIT_USER_REQUEST } from './actions'

const initialState = {
    password: ''
};

export const changePassword = (oldPassword, password, confirmPassword, token, resolve, reject, resetForm) => ({
    type: EDIT_USER_REQUEST,
    payload: { oldPassword, password, confirmPassword, token, resolve, reject, resetForm }
})


export default function editUserReducer(state = initialState, { type, payload: { password, token } }) {
    switch (type) {
        case EDIT_USER_SUCCESS: {
            return { ...state, password, token }
        }
        default:
            return state
    }
}