import "../style/shopItemStyle.scss";
import "../style/proudOfPoloandStyle.scss";
import "../style/occasionStyle.scss"
import React from "react";
const ProudOfPolandItem = (props) => {
  return (
    <div className="proud-of-poland">
      <img
        className="d-block  occasion-image"
        src={props.img}
        alt={props.alt}
      />
      
      <div className="occasion-text proud-text-item">
        <h6>{props.text}</h6>
        <p className="occasion-description">{props.description}</p>
      </div>
      <div className="price-container">
      <div className="currentPrice">{props.price} PLN</div>
      <div className="oldPrice">{props.oldPrice} PLN</div>
      </div>
    </div>
  );
};

export default ProudOfPolandItem;
