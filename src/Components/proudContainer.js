import React, { Component } from "react";
import ProudofPolandBig from './proudOfPolandBig';
import ProudofPolandSmall from './proudOfPolandSmall';
import Media from 'react-media';
export default class ProudMain extends Component {
  render() {
    return (
        <Media queries={{ small: { maxWidth: 1180 } }}>
        {matches =>
          matches.small ? (
            <ProudofPolandSmall/>
          ) : (
            <ProudofPolandBig/>
          )
        }
      </Media>
    );
  }
}
