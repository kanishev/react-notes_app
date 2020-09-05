import React, { useContext } from 'react'
import AlertContext from '../../Redux/Alert/AlertContext'
import {CSSTransition} from 'react-transition-group'

const Alert = () => {

    const {alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition 
        in={alert.active}
        timeout={550}
        classNames={"alert"}
        unmountOnExit
        mountOnEnter
        >
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>Yoop!</strong> {alert.text}.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        </CSSTransition>
    )
}

export default Alert