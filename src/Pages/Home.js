import React, { useContext, useEffect } from 'react'
import Form from '../Components/Form/Form'
import Note from '../Components/Navbar/Note'
import DatabaseContext from '../Redux/Database/databaseContext'
import Spinner from '../Components/Spinner/Spinner'
import Alert from '../Components/Alert/Alert'

const Home = () => {

    const { data, fetchData, removeNote } = useContext(DatabaseContext)

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container mt-4">
            <Alert />
            <h1>Заметки</h1>

            <Form />

            {data.isEmpty ?
            <p style={{ textAlign: "center" }}>Пока что нет никаких заметок!</p>
                : data.loading 
                ? <Spinner />
                : <Note notes={data.notes} onRemove={(id) => removeNote(id)}
            />}



        </div>
    )
}

export default Home