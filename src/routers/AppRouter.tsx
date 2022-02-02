import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import App from "../components/App";

const AppRouter = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

export default AppRouter;
