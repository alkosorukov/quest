import { SHOW_MODALS, HIDE_MODALS } from './actionsConst'

const initialState = { modalSuccess: [] }

export const modalSuccess = (state = initialState, { type, payload }) => {
    let newState = {}
    const modalsCollection = [...state]
    switch (type) {
        case SHOW_MODALS:
            modalsCollection.push(payload)
            newState = { ...state, modalSuccess: modalsCollection }
            break;
        case HIDE_MODALS:
            modalsCollection.shift()
            newState = { ...state, modalSuccess: modalsCollection }
            break;
        default:
            newState = state
    }

    return newState
}