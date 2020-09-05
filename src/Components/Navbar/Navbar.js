import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">Notes App</div>
            <div className="navbar-nav">
                <NavLink className="nav-link" exact to="/">Главная</NavLink>
                <NavLink className="nav-link" to="/about">Информация</NavLink>
            </div>
    </nav>
)


export default Navbar