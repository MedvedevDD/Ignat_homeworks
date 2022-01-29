import React from 'react'
import Header from './Header'
import MyRoutes from "./MyRoutes";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function HW5() {
    return (

        <div>
            <BrowserRouter>
                {/*в gh-pages лучше работает HashRouter*/}
                {/*<HashRouter>*/}
                {/*<Routes>*/}
                    <Header/>

                    <MyRoutes/>
                {/*</Routes>*/}
                {/*</HashRouter>*/}
            </BrowserRouter>
        </div>

    )
}

export default HW5
