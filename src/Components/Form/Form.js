import React, { useContext, useState} from 'react'
import AlertContext from '../../Redux/Alert/AlertContext'
import DatabaseContext from '../../Redux/Database/databaseContext'

const Form = () => {

    const {show, hide} = useContext(AlertContext)
    const {addNote} = useContext(DatabaseContext)

    const [value, setValue] = useState('')


    const onSubmit = (event) => {
        event.preventDefault()

        if (value.trim()) {
            show('Заметка была создана', 'success')
            addNote(value)
            setValue('')
            setTimeout(() => {
                hide()
            }, 1000)
        }
        else {
            show('Введите что нибудь', 'warning')
        }

    }

    return (
        <form onSubmit={onSubmit}>
            <div className="input-group flex-nowrap mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping" onClick={(e) => onSubmit()}>Добавить</span>
                </div>
                <input type="text" className="form-control" placeholder="..." aria-label="..." aria-describedby="addon-wrapping" value={value} onChange={e => setValue(e.target.value)} />
            </div>
        </form>
    )
}

export default Form