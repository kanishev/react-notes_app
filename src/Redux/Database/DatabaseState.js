import React, { useReducer } from 'react'
import DatabaseContext from './databaseContext'
import DatabaseReducer from './DatabaseReducer'
import { FETCH_DATA, ADD_NOTE, LOADING, EMPTY_NOTES, DELETE_NOTE } from '../types'
import Axios from 'axios'


const DatabaseState = ({ children }) => {

    const url = process.env.REACT_APP_DATABASE_URL

    const initialState = {
        notes: [],
        loading: false,
        isEmpty: false
    }

    const [data, dispatch] = useReducer(DatabaseReducer, initialState)

    const fetchData = async () => {
        loading()

        await Axios.get(url + 'notes.json').then(response => {

            if (response.data == null) {
                dispatch({ type: EMPTY_NOTES })
            }
            else {
                let payload = Object.keys(response.data).map(k => {
                    return {
                        ...response.data[k],
                        id: k
                    }
                })

                dispatch({ type: FETCH_DATA, payload })
            }

        })

    }

    const addNote = async (text) => {
        const data = {
            title: text,
            date: new Date().toString()
        }
        await Axios.post(url + 'notes.json', data).then(response => {

            const payload = {
                ...data,
                id: response.data.name
            }

            dispatch({ type: ADD_NOTE, payload })
        })
    }



    const removeNote = async (id) => {
        await Axios.delete(url + `notes/${id}.json`).then(async () => {
            await Axios.get(url + 'notes.json').then(response => {

                if (response.data == null) {
                    dispatch({ type: DELETE_NOTE, payload: { id, isEmpty: true } })
                }
                else {
                    dispatch({ type: DELETE_NOTE, payload: { id, isEmpty: false } })
                }
            })

        })
    }


    const loading = () => {
        dispatch({ type: LOADING })
    }

    return (
        <DatabaseContext.Provider value={{
            addNote, fetchData, removeNote, data
        }}>
            {children}
        </DatabaseContext.Provider>
    )

}


export default DatabaseState