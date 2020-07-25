import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/footerStyle.scss";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-left">
            <ul className="nav">
              <NavLink
                exact={true}
                activeClassName="footer-nav-active-link"
                className="nav-link"
                to="/"
              >
                <li className="footer-nav-object">STRONA GŁÓWNA</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="footer-nav-active-link"
                className="nav-link"
                to="/"
              >
                <li className="footer-nav-object">AUKCJE</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="footer-nav-active-link"
                className="nav-link"
                to="/"
              >
                <li className="footer-nav-object">NOWOŚCI</li>
              </NavLink>
              <NavLink
                exact={true}
                activeClassName="footer-nav-active-link"
                className="nav-link"
                to="/"
              >
                <li className="footer-nav-object">PROMOCJE</li>
              </NavLink>
            </ul>
          </div>
          <div className="footer-right">
            <div className="footer-social-text">ODWIEDŹ NAS NA:</div>
            <div className="footer-social-pictures">
              <div className="footer-social-logo"><img className="footer-social-img" src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png" alt="Facebook Logo"/></div>
              <div className="footer-social-logo"><img className="footer-social-img" src="https://blog.m40.pl/wp-content/uploads/2015/03/Google-Plus-Logo.png" alt="Google Plus Logo"/></div>
              <div className="footer-social-logo"><img className="footer-social-img" src="https://static.wixstatic.com/media/632442_891c871063c740c2a2dcff119b11b8f9.png/v1/fill/w_784,h_784,al_c,q_95,usm_0.66_1.00_0.01/632442_891c871063c740c2a2dcff119b11b8f9.webp" alt="Social Media Logo"/></div>
              <div className="footer-social-logo"><img className="footer-social-img" src="https://www.maryville.edu/wp-content/uploads/2015/11/youtube-logo-png-3575.png" alt="YouTube Logo"/></div>
              <div className="footer-social-logo"><img className="footer-social-img" src="https://www.oprojektowaniu.pl/wp-content/uploads/2017/02/official-linkedin-logo-tile-300x300.png" alt="LinkedIn Logo"/></div>
              <div className="footer-social-logo"><img className="footer-social-img" src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Instagram-512.png" alt="Instagram Logo"/></div>
        
            </div>
          </div>
        </div>
      </div>
    );
  }
}
