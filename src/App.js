import React from "react";
import Header from "./Components/header";
import Navbar from "./Components/navbar";
import {HashRouter, Route } from "react-router-dom";
import Home from "./view/home";
import "./airKioskStyle.scss";
// import './style/header.css'

function App() {
  return (
    <HashRouter>
      <div className="global-container">
        <div className="header-bar">
        <Header />
        <Navbar />
        </div>
        <Route exact path="/" component={Home} />
        <Route path ="/aukcje" component={Home} />
        <Route path ="/nowosci" component={Home} />
        <Route path ="/promocje" component={Home} />
        <Route path ="/dostawaPoklad" component={Home} />
        <Route path ="/dostawaAdres" component={Home} />
        <Route path ="/uslugi" component={Home} />
      </div>
    </HashRouter>
  );
}

export default App;
