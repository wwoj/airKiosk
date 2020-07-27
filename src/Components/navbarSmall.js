import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchIcon } from "../Objects/BootstrapIcons";
import { NavLink } from "react-router-dom";
import "../style/navbarStyle.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarStyle: styleHide,
      style: { visibility: "show" },
    };
  }
  hideNavbar = () => {
    console.log(styleHide);
    console.log("a stan: ", this.state.navbarStyle);
    this.setState({ navbarStyle: styleHide });
  };
  showNavbar = () => {
    this.setState({ navbarStyle: this.state.styleShow });
  };

  render() {
    return (
      <section className="nav-section">
        <nav className="header-class  navbar-dark  box-shadow">
          <div className="nav-bar">
            <div class="nav-menu-button" onClick={this.showNavbar}>
            <FontAwesomeIcon icon={faBars} size="3x" />
            </div>

            <div class="hidden-navbar " style={this.state.navbarStyle}>
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
                <li class="nav-active-link" onClick={this.hideNavbar}>
                  Zamknij
                </li>
              </ul>
            </div>
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

const styleHide = {
  visibility: "hidden",
};
const styleShow = {
  visibility: "show",
};
