import { AUTH_SUCCESS, AUTH_REQUEST, AUTH_REQUEST_TOKEN, EXIT_SITE } from './actions'

const initialState = {
    token: ''
}

export const authorize = (username, password, resolve, reject) => ({
    type: AUTH_REQUEST,
    payload: { username, password, resolve, reject }
})

export const authorizeToken = (token) => ({
    type: AUTH_REQUEST_TOKEN,
    payload: { token }
})

export const exitSite = () => ({
    type: EXIT_SITE,
    payload: initialState
})

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_SUCCESS: {
            return { ...state, ...payload }
        }
        case EXIT_SITE: {
            return { ...initialState }
        }
        default:
            return state
    }
}