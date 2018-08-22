import * as act from './actions'

const initialState = {
    loadingPage: false
}

export const showLoader = () => {
    console.log('показать шторку')
    document.body.classList.add('loading-app')
    return { type: act.startLoading }
}

export const hideLoader = () => {
    console.log('скрыть шторку')
    document.body.classList.remove('loading-app')
    return { type: act.finishLoading }
}

export default function loading(state = initialState, action) {

    switch (action.type) {
        case act.startLoading:
            return { ...state, loadingPage: true }
        case act.finishLoading:
            return { ...state, loadingPage: false }
        default:
            return state
    }
}