import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchIcon } from "../Objects/BootstrapIcons";
import { NavLink } from "react-router-dom";
import "../style/navbarStyle.scss";
export default class NavBar extends Component {
  render() {
    return (
      <section className="nav-section">
        <nav className="header-class  navbar-dark  box-shadow">
          <div className="nav-bar">
            <ul className="nav">
              <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/"
              >
                <li key="navBig_1" className="nav-item">Dostawa na pokład</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/dostawaAdres"
              >
                <li key="navBig_2" className="nav-item">Dostawa na adres</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/uslugi"
              >
                <li key="navBig_3" className="nav-item">Usługi</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/aukcje"
              >
                <li key="navBig_4" className="nav-item">Aukcje</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/nowosci"
              >
                <li key="navBig_5" className="nav-active-link">Nowości</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/promocje"
              >
                <li key="navBig_6" className="nav-active-link">Promocje</li>
              </NavLink>
            </ul>
          </div>
        </nav>
        <div className="col-sm-3 my-1">
          <label className="sr-only" htmlFor="searchPhrase">
            Username
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="searchPhrase"
              placeholder="Szukaj produktu..."
            />
            <div className="input-group-prepend">
              <div className="input-group-text">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
