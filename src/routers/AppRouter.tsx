import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import App from "../components/App";
import Header from "../components/Header";

const AppRouter = () => (
    <React.StrictMode>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

export default AppRouter;
