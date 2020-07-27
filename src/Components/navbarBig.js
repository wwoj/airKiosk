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
            <ul class="nav">
              <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/"
              >
                <li class="nav-item">Dostawa na pokład</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/calculate"
              >
                <li class="nav-item">Dostawa na adres</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/info"
              >
                <li class="nav-item">Usługi</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/miniGame"
              >
                <li class="nav-item">Aukcje</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/aboutMe"
              >
                <li class="nav-active-link">Nowości</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/aboutMe1"
              >
                <li class="nav-active-link">Promocje</li>
              </NavLink>
            </ul>
          </div>
        </nav>
        <div class="col-sm-3 my-1">
          <label class="sr-only" for="inlineFormInputGroupUsername">
            Username
          </label>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Szukaj produktu..."
            />
            <div class="input-group-prepend">
              <div class="input-group-text">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
