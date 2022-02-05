import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from "../components/Header";
import App from "../components/App";
import Play from "../components/Play";

const AppRouter = () => (
    <React.StrictMode>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/play" element={<Play/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

export default AppRouter;
