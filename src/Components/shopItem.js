import React, { Component } from "react";

export default class ShopTopItem extends Component {
  render() {
    return (
      <div className="occasion-container">
        <img
          className="d-block w-100 occasion-img"
          src="https://forhim.pl/2847-home_default/pendrive-ford-mustang-2015-16gb-carpendrive.jpg"
          alt="First slide"
        />
        <div className="occasion-text-container">
          <h4>
            <div className="occasion-text">Biżuteria Versalka</div>
          </h4>
        </div>
        <p className="occasion-item">Opisujemy tutaj wszystko lo</p>
        <div className="occasion-button">Przycisk</div>
      </div>
    );
  }
}

export  class ShopElement extends Component {
  render() {
    return (
      <div className="occasion-container">
        <img
          className="d-block w-100 occasion-img"
          src="https://forhim.pl/2847-home_default/pendrive-ford-mustang-2015-16gb-carpendrive.jpg"
          alt="First slide"
        />
        
            <div className="occasion-text"><h6>PIERŚCIONEK VISANTI</h6><p>srebrny z białą perłą słodkowodną ok. 6mm</p></div>
         <div><span>89.99zł</span><span> nie 99.99zł</span></div>
      </div>
    );
  }
}

