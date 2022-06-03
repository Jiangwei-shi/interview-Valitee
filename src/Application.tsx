import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import GamePage from "./pages/Game";
import PageNotFound from "./pages/PageNotFound";

export interface IApplicationProps{}

const Application:React.FunctionComponent<IApplicationProps> = (props) =>{
    return <BrowserRouter>
    <Routes>
    <Route path="/" element={<MainPage />}/>
    <Route path="/game" element={<GamePage />} />
    <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </BrowserRouter>;

};

export default Application;