const { HIDE_ALERT, SHOW_ALERT } = require("../types");

const handlers = {
    [SHOW_ALERT]: (state, {payload}) => ({...payload, active: true}),
    [HIDE_ALERT]: (state) => ({...state, active: false}),
    DEFAULT: () => null
}

const AlertReducer = (state, action) => {
    const handler = handlers[action.type] || action.DEFAULT
    return handler(state, action)
}

export default AlertReducer