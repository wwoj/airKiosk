import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ShoppingCart, UserIcon } from "../Objects/BootstrapIcons";
import LotIcon from "../Pictures/LOT_Icon.png";
import PlaneIcon from "../Pictures/PlaneIcon.png";
import '../style/headerStyle.scss'
export default class Header extends Component {
  render() {
    return (
      <div>
        <section className="main-bar-user section-border-bottom">
          <UserIcon />
          <span className="main-bar-margin-right">Moje konto</span>
          <ShoppingCart />
          <span className="main-bar-margin-right">
              0 PLN
              </span>
          <select name="language" id="language" className="main-bar-margin-right">
            <option selected="selected" value="tpi" >
              PL
            </option>
            <option value="11">EN</option>
            <option value="14">DE</option>
            <option value="16">FR</option>
            <option value="18">ES</option>
            <option value="19">RU</option>
          </select>
          <select name="currency" id="currency" className="main-bar-margin-right">
            <option selected="selected" value="tpi">
              PLN
            </option>
            <option value="11">USD</option>
            <option value="14">EUR</option>
            <option value="16">RUB</option>
            <option value="18">FBP</option>
          </select>
        </section>
        <section className="main-bar-ticket section-border-bottom">
          <div className="main-bar-logo">
            <img src={LotIcon} alt="logo" className="img-div"  className="main-lot-icon"/>
          </div>
          <div className="main-lot-reservation">
            <div>
              <img src={PlaneIcon} alt="logo" className="img-div" />
            </div>
            <div className="main-lot-reservation-text ">
                <p>
                <span>Numer Twojej rezerwacji:</span>
                </p>
                <p>
                    <span>233AD8</span> <span><a href="/" className="a-decorations">zmień</a></span>
                    <FontAwesomeIcon icon="coffee" />
                </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
