import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PreJunior from "./pages/PreJunior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior+',

    // add paths
}

function MyRoutes() {
    return (
        <BrowserRouter>
            <div>
                {/*Switch выбирает первый подходящий роут*/}
                {/*<Switch>*/}

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

                {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
                <Routes>

                    <Route path={'/'} element={<PreJunior/>}/>
                    <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                    <Route path={PATH.JUNIOR} element={<PreJunior/>}/>
                    <Route path={PATH.JUNIOR_PLUS} element={<PreJunior/>}/>

                </Routes>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                {/*<Route render={() => <Error404/>}/>*/}

                {/*</Switch>*/}
            </div>
        </BrowserRouter>
    )
}

export default MyRoutes
