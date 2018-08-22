import { SHOW_MODALS, HIDE_MODALS } from './actionsConst'

const hideModals = () => ({ type: HIDE_MODALS })

const showModals = ({ text, header = '' }) => ({ type: SHOW_MODALS, payload: { text, header } })


export const actions = { showModals, hideModals }