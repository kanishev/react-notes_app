import React, { useReducer } from 'react'
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'
import { SHOW_ALERT, HIDE_ALERT } from '../types'

const AlertState = ({children}) => {

    const [alert, dispatch] = useReducer(AlertReducer, {active: false})

    const show = (text, type) => {
        dispatch({type: SHOW_ALERT, payload: {text, type}})
    }

    const hide = () => {
        dispatch({type: HIDE_ALERT})
    }

    return (
        < AlertContext.Provider value={{
            alert, show, hide
        }}>
            {children}
        </ AlertContext.Provider>
    )


}

export default AlertState
