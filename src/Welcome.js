import React from "react";
import './Welcome.css';
const Welcome = () => {
  return (
    <div>
      <h1 id="wlcm">Welcome to the Survey!</h1>
      <button id="btn" onClick={() => window.location.href = "/survey"}>Start Survey</button>
    </div>
  );
};

export default Welcome;
