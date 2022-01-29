import React from 'react'
import {NavLink} from "react-router-dom";




function Header() {

    return (

        <div>
            <div>
                <NavLink to="/pre-junior">Пре-Джун</NavLink>
                <NavLink to="/junior">Джун</NavLink>
                <NavLink to="/junior+">Джун+</NavLink>

            </div>
        </div>
    )

}

export default Header
