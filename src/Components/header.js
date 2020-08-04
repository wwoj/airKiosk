import React, { Component } from "react";
import { ShoppingCart, UserIcon } from "../Objects/BootstrapIcons";
import { NavLink } from "react-router-dom";
import LotIcon from "../Pictures/LOT_Icon.png";
import PlaneIcon from "../Pictures/PlaneIcon.png";
import "../style/headerStyle.scss";
export default class Header extends Component {
  render() {
    return (
      <div>
        <section className="main-bar-user section-border-bottom">
          <div className="main-bar-user-nav">
            <div className="header-top-object">
              <UserIcon />
              <span className="main-bar-margin-left">Moje konto</span>
            </div>
            <div className="header-top-object">
              <ShoppingCart />
              <span className="main-bar-margin-left">0 PLN</span>
            </div>
            <div className="header-top-object">
              <select
                name="language"
                id="language"
                className="main-bar-margin-left"
              >
                <option defaultValue="pl" value="pl">
                  PL
                </option>
                <option value="en">EN</option>
                <option value="de">DE</option>
                <option value="fr">FR</option>
                <option value="es">ES</option>
                <option value="ru">RU</option>
              </select>
              <select
                name="currency"
                id="currency"
                className="main-bar-margin-right"
              >
                <option defaultValue="pln" value="pln">
                  PLN
                </option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="rub">RUB</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
        </section>
        <section className="main-bar-ticket section-border-bottom">
          <div className="main-bar-logo">
          <NavLink
                exact={true}
                activeClassName="active-link"
                className="nav-link"
                to="/"
              >
            <img
              src={LotIcon}
              alt="logo"
              className="img-div main-lot-icon"
            />
            </NavLink>
          </div>
          <div className="main-lot-reservation">
            <div className="header-reservation-container">
              <div className="header-reservation-img">
                <img src={PlaneIcon} alt="logo" className="img-div" />
              </div>
              <div className="header-reservation-info">
                <div className="header-reservation-title">
                  Numer Twojej rezerwacji:
                </div>
                <div className="header-reservation-text">
                  <div> 233AD8</div>
                  <div> zmień</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
