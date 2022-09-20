
import React from "react";
import img1 from "../professor_.svg";


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
        <img src={img1} alt="" />
      </div>
    
  );
};

export default Home;
