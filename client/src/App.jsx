import React, {useState} from "react";
import Course from "./pages";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Navigate } from "react-router-dom";

import Glavnaya from "./pages/IndexPage/glavnaya";
import LoginPage from "./pages/Auth/Login";
import LogoutPage from "./pages/Auth/Logout";
const App = () => {
    const [isAuth,setAuth] = useState(false);
    return(
        <>
            <BrowserRouter>
                <Routes>
                    {isAuth?
                        <>
                            <Route path={"/"} element={<Glavnaya IdUser={1} />}/>
                            <Route path={"Course/:id/*"} element = {<Course/>}/>
                            <Route path="*" element={<Navigate to="/" replace />}/>

                        </>:
                        <>
                            <Route path="*" element={<Navigate to="/login" replace />}/>
                            <Route path={"/login"} element={<LoginPage/>}/>
                            <Route path={"/register"} element={<LogoutPage/>}/>
                        </>
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
