import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from './components/Login';
import ImageEditor from './components/ImageEditor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import Authorize from "./components/Auth";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Footer from "./components/Footer";



function App() {
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
          
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
