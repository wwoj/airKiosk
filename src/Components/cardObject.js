import React, { Component } from "react";
import '../style/cardObjects.scss';

  export default class CardObject extends Component{
    // constructor(props){
    //   super(props);
    // }
    render(){
      
      let pricediv;
      switch(this.props.model)
      {
      case 1:
      {
        pricediv = <div className="card-price"><p className="card-price-current">{this.props.currentPrice} PLN</p><p className="card-price-prev">{this.props.prevPrice} PLN</p></div>
        break;
      }
      case 2:
      {
        pricediv = <div className="card-price"><p className="card-price-current">{this.props.currentPrice} PLN</p></div>
        break;
      }
      default:
        {
          pricediv = <div className="card-price"><p className="card-price-current">{this.props.currentPrice} PLN</p><p className="card-price-prev">{this.props.prevPrice} PLN</p></div>
          break;
        }
    }
  return (
    <div className="card-container">
      <div className="card-img-object-div">
        <img
          className="card-img"
          src={this.props.img}//"https://pl.all.biz/img/pl/catalog/118067.jpeg"
          alt={this.props.alt}
        />
      </div>
      <div className="card-text-container">
        <p className="card-text-p">{this.props.title}</p>
        <span className="card-text-span">{this.props.text}</span>
      </div>
      {pricediv}
    </div>
  );
  }
}

