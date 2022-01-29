import React from 'react'
import {NavLink} from "react-router-dom";
import BasicMenu from "./NavMenu";




function Header() {

    return (

        <div>
            <BasicMenu/>
                {/*<NavLink to="/pre-junior">Пре-Джун </NavLink>*/}
                {/*<NavLink to="/junior">Джун </NavLink>*/}
                {/*<NavLink to="/junior+">Джун+ </NavLink>*/}


        </div>
    )

}

export default Header
