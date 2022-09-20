import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from './components/Login';
import ImageEditor from './components/ImageEditor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"; 
import Notfound from "./components/Notfound";




function App({currentUser, checkUserSession }) {

  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
      
          <Route element={<Home></Home>} path="/" />
          <Route element={<Home></Home>} path="home" />
          <Route element={<Login></Login>} path="login" />
          <Route element={<Register></Register>} path="register" />
          <Route element={<ImageEditor></ImageEditor>} path="imageEditor" />
           <Route exact path="/" component={Home} />
          <Route component={<Notfound></Notfound>} path="Notfound" />
         
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
