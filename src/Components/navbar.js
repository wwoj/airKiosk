import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarBig from './navbarBig';
import NavbarSmall from './navbarSmall';
import Media from 'react-media';
import "../style/navbarStyle.scss";
export default class NavBar extends Component {
  render() {
    return (

      <Media queries={{ small: { maxWidth: 1160 } }}>
          {matches =>
            matches.small ? (
              <NavbarSmall/>
            ) : (
              <NavbarBig/>
            )
          }
        </Media>
    );
  }
}
