import React from "react";
// import components:
import Header from "./Components/header";
import Navbar from "./Components/navbar";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import Home from "./view/home";
// import "./App.css";
// import './style/header.css'

function App() {
  return (
    <HashRouter>
      <div className="main-container">
        <div className="header-bar">
        <Header />

        <Navbar />
        </div>
        <Route path exact="/" component={Home} />
        <Route path ="/calculate" component={Home} />
        <Route path ="/info" component={Home} />
        <Route path ="/aboutMe" component={Home} />
        <Route path ="/miniGame" component={Home} />
      </div>
    </HashRouter>
  );
}

export default App;
