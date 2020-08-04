import React, { Component } from "react";
import '../style/cardObjects.scss';

  export default class CardMain extends Component{
    // constructor(props){
    //     super(props);
    //   }
    render(){
      
  return (
    <div className="card-container">
      <div className="card-img-main-div">
        <img
          className="card-img card-h100"
          src={this.props.img}
          alt={this.props.alt}
        />
        <h4>
            <div className="card-main-title">{this.props.topTitle}</div>
          </h4>
      </div>
      <div className="card-text-container">
        <p className="card-text-p-main"><span>{this.props.title}</span></p>
      </div>
      <div className="card-nav"><p className="card-nav-text">{this.props.text}</p></div>
      
    </div>
  );
  }
}

