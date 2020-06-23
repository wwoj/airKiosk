import React, { Component } from "react";

export default class ShopItem extends Component {
  render() {
    return (
      <div className="item-container">
        
        <div className="symbol-container">
          <div className="symbol-line" style={{background:"blue"}}>
            <hr />
          </div>
          <div className="symbol-item">
          znaczek
          </div>
          <div className="symbol-line">
            <hr />
          </div>
        </div>
        <div className="item-description">opis</div>
        <div className="item-button">Przycisk</div>
      </div>
    );
  }
}
