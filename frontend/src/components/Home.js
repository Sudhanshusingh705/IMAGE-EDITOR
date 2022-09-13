// 1. Components are simple JavaScript Functions
// 2. Function name should always start with uppercase letter
// 3. Function should always return a single JSX element
// 4. Function should be exported

import React from "react";
import "./Home.css";
import img1 from "../professor_.svg";
//import logo from "../logo.svg";


const Home = () => {
  return (

      <div className="App">
        <h1
          className="head1"
          style={{ color: "rose" }}
        >
          IMAGE EDITOR
        </h1>
        <hr />
        <img src={img1} />
      </div>
    
  );
};

export default Home;
