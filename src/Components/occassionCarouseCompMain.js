import '../style/shopItemStyle.scss'
import '../style/proudOfPoloandStyle.scss'
import '../style/occassionStyle.scss';
import "../airKioskStyle.scss";
import '../style/home.css'
import React from 'react';
const   CarouselLink = (props)=> {
  
    return (
      <div className="occassion-carousel-comp">
        <img
          className="d-block  proud-poland-picture-main"
          src={props.img}
          alt={props.alt}
        />
        
        <div className="occasion-text-container">
          <h4>
            <div className="occasion-text">BIŻUTERIA VISANTI</div>
          </h4>

        </div>
        <div className="proud-poland-text">Produkty z oferty SHOP&#38;MORE z dostawą pod wskazany adres na terenie polski.</div>
        <div className="link-button"><span>Poznaj całą kolekcję&#62;</span></div>
      </div>
    );
  
}

export default CarouselLink;