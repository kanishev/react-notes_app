const { FETCH_DATA, ADD_NOTE, DELETE_NOTE, LOADING, EMPTY_NOTES } = require("../types")

const handlers = {
    [FETCH_DATA]: (state, {payload}) => ({...state, notes: payload, loading: false, isEmpty: false}),
    [ADD_NOTE]: (state, {payload}) => ({...state, notes: [...state.notes, payload], isEmpty: false, loading: false}),
    [DELETE_NOTE]: (state, {payload}) => ({...state, notes: state.notes.filter(n => n.id !== payload.id), isEmpty: payload.isEmpty, loading: false}),
    [LOADING]: (state) => ({...state, loading: true}),
    [EMPTY_NOTES]: (state) => ({...state, isEmpty: true}),
    DEFAULT: state => state 
}

const DatabaseReducer = (state, action) => {

    const handler = handlers[action.type] || handlers.DEFAULT

    return handler(state, action)
}

export default DatabaseReducer