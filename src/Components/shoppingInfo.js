import React, { Component } from "react";
import CircleInfo from "../Components/circleInfo";
import "../style/shoppingInfoStyle.scss";
import Logo1 from '../Pictures/../Pictures/deliveryOnBoard.png'
import Logo2 from '../Pictures/../Pictures/Logo_2.png'
import Logo3 from '../Pictures/../Pictures/Logo_3.png'
import Logo4 from '../Pictures/../Pictures/Logo_4.png'
export default class ShoppingInfo extends Component {
  render() {

    return (
      <div className="shopping-details">
        <div className="circle-info">
          <CircleInfo src={Logo1} infoText="DOSTAWA NA POKŁAD" />
          <CircleInfo src={Logo2} infoText="PŁATOŚCI MILES&MORE" />
          <CircleInfo src={Logo3} infoText="PŁATNOŚCI ONLINE" />
          <CircleInfo src={Logo4} infoText="WYSYŁKA W 24H" />
        </div>
      </div>
    );
  }
}
