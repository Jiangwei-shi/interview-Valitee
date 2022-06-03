import React from "react";
import "./PageNotFound.css";
export interface IPageNotFoundProps { }

//this is the the 404 page
const PageNotFound: React.FunctionComponent<IPageNotFoundProps> = (props) => {
  return <body>
    <div className="error">
      <div className="choice-user">
        <img className="user-hand" src={'../images/cry.gif'} />
      </div>
      <div className="mainbox">
        <div className="err">4</div>
        <div className="err2">0</div>
        <div className="err3">4</div>
        <div className="msg">Maybe this page have fun with his friend? <p>Let's go <a href="game">game</a> and wait for him.</p></div>
      </div>
    </div>;

  </body>

};
export default PageNotFound;