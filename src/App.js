import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from "react-router-dom";
import About from './About'
import Product from './Product'
import NAvbar from './Navbar'
import RouteConfig from "./RouteConfig"
function App() {
  return (

    <>
    <RouteConfig/>
    </>
  );
}

export default App;
