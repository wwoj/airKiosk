import "../style/shopItemStyle.scss";
import "../style/proudOfPoloandStyle.scss";
import "../style/newsCarouselStyle.scss";
import "../style/occassionStyle.scss";
import React from "react";
const OccassionObject = (props) => {
  return (
    <div className="occassion-card testowe">
      <div className="occassion-div-pic objects-margins">
        <img
          className="d-block  occassion-picture "
          src={props.img}
          alt={props.alt}
        />
      </div>
      <div className="news-title objects-margins">
        <p>{props.text}</p>
      </div>
      <div className="news-description ">
        <span>{props.info}</span>
      </div>
      <div className="currentPrice objects-margins">{props.price} PLN</div>
    </div>
  );
};

export default OccassionObject;