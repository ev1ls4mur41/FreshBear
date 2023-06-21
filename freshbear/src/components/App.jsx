import React from "react";
import Layout from "./layout.jsx";
import {Routes, Route, Link} from "react-router-dom";
import Profile from "./profile.jsx";
import About from "./about.jsx";
import Main from "./Main.jsx";
import ErrorPage from "./errorPage.jsx";
import {LoginPage} from "./loginPage.jsx";
import {AuthProvider} from "../hoc/authProvider.jsx";
import {requierAuth} from "../hoc/requierAuth.jsx";



class App extends React.Component {

    render() {
        return (
            <>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Main/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="login" element={<LoginPage/>}/>
                            <Route path="profile" element={
                                <requierAuth>
                                    <Profile/>
                                </requierAuth>
                            }/>
                        </Route>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </AuthProvider>
            </>
        );
    }


}

export default App;
