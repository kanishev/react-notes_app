import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Note = ({ notes, onRemove }) => (
    <TransitionGroup component={'ul'} className="list-group">

        {notes.map(n => (
            <CSSTransition
                key={n.id}
                classNames={'ul'}
                timeout={200}
            >
                <li className="list-group-item note" key={n.id}>
                    <div>
                        <strong className="mr-2">{n.title}</strong>
                        <small>{n.date}</small>
                    </div>
                    <button
                        className="btn btn-close"
                        onClick={(id) => onRemove(n.id)}>
                        &times;
                    </button>
                </li>
            </CSSTransition>
        ))}

    </TransitionGroup>
)


export default Note