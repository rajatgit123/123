import { BrowserRouter, Route, Routes, Router, Switch } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import Nav from "./components/Nav";
import Secured from "./pages/Securedpage";
import Home from './pages/Home';
import User from './pages/User';
import './App.css';
import { IconContext } from "react-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Device from './pages/Devices';
import Loginpage from './pages/Loginpage';
import DefaultLayout from './components/DefaultLayout';
import Register from './pages/Register';
import Login from './pages/Login';
const Pool = require("pg").Pool;



function App() {
  
  const pool = new Pool({
    user: "postgres",
    password: "password123",
    host: "database-1.cnuz8nadorxl.ap-south-1.rds.amazonaws.com",
    port: 5432,
    database: "database-1", 
});

module.exports = pool;

  return (

    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>

      </BrowserRouter>


    </div>

  );
}

export default App;
