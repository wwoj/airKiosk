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
            <div className="nav-menu-button" onClick={this.showNavbar}>
              <FontAwesomeIcon icon={faBars} size="3x" />
            </div>

            <div className="hidden-navbar" style={this.state.navbarStyle}>
              <ul className="nav">
                <NavLink
                  exact={true}
                  activeClassName="active-link"
                  className="nav-link"
                  to="/"
                >
                  <li key="nav_1" className="nav-item" onClick={this.hideNavbar}>
                    Dostawa na pokład
                  </li>
                </NavLink>
                <NavLink
                  exact={true}
                  activeClassName="active-link"
                  className="nav-link"
                  to="/calculate"
                >
                  <li key="nav_2" className="nav-item" onClick={this.hideNavbar}>
                    Dostawa na adres
                  </li>
                </NavLink>
                <NavLink
                  exact={true}
                  activeClassName="active-link"
                  className="nav-link"
                  to="/info"
                >
                  <li key="nav_3" className="nav-item" onClick={this.hideNavbar}>
                    Usługi
                  </li>
                </NavLink>
                <NavLink
                  exact={true}
                  activeClassName="active-link"
                  className="nav-link"
                  to="/miniGame"
                >
                  <li key="nav_4" className="nav-item" onClick={this.hideNavbar}>
                    Aukcje
                  </li>
                </NavLink>
                <NavLink
                  exact={true}
                  activeClassName="active-link"
                  className="nav-link"
                  to="/aboutMe"
                >
                  <li key="nav_5" className="nav-active-link" onClick={this.hideNavbar}>
                    Nowości
                  </li>
                </NavLink>
                <NavLink
                  exact={true}
                  activeClassName="active-link"
                  className="nav-link"
                  to="/aboutMe1"
                >
                  <li key="nav_6" className="nav-active-link" onClick={this.hideNavbar}>
                    Promocje
                  </li>
                </NavLink>
                <li key="nav_7" className="nav-active-link" onClick={this.hideNavbar}>
                  Zamknij
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="col-sm-3 my-1">
          <label className="sr-only" htmlFor="inlineFormInputGroupUsername">
            Username
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername"
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

const styleHide = {
  visibility: "hidden"
};
