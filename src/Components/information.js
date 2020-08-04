import React, { Component } from "react";
import InformationBig from './infomrationBig';
import InformationSmall from './informationSmall';
import Media from 'react-media';
import "../style/informationStyle.scss";
export default class Inforamtions extends Component {
  render() {
    return (
      <Media queries={{ small: { maxWidth: 800 } }}>
      {matches =>
        matches.small ? (
          <InformationSmall/>
        ) : (
          <InformationBig/>
        )
      }
    </Media>
    );
  }
}
