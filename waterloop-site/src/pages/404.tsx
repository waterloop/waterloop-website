import React from "react";
import "../theme/styles.scss";
import Goose from "../static/img/404page/errorgoose.png"; 


const ErrorPage: React.FC = () => (
    <div className="errorpage">
        <div className="errorpagetext">
        <h3>ERROR</h3>
        <h1>404</h1>
        <p>Oops! The page you are looking for was not found.</p>
        </div>
        <div className="errorpageimage">
        <img className="errorgoose" src={Goose}></img>
        </div>
    </div>
); 

export default ErrorPage;
