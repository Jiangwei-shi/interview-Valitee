import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export interface ImainProps { }
//this is the main page. when user login
const MainPage: React.FunctionComponent<ImainProps> = (props) => {
    const navigate = useNavigate();

    return <div className="container">
        <h1>
            <span className="h1color">
                this is the main page.</span>
        </h1>
    </div>;

};

export default MainPage;