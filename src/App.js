import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Survey from "./Survey";
import ThankYou from "./ThankYou";

const App = () => {
  return (
    
      <div>
        <h1 >Customer Survey</h1>
        <Routes>
          <Route  path="*" element={<Welcome />} />
          <Route  path="/survey" element={<Survey />} />
          <Route  path="/thankyou" element={<ThankYou />} />
          {/* Redirect to Welcome if an invalid path is entered */}
          <Route element={<Welcome />} />
        </Routes>
      </div>
    
  );
};

export default App;
