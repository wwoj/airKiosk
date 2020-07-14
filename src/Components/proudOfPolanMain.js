import '../style/shopItemStyle.scss'
import '../style/proudOfPoloandStyle.scss'
import "../airKioskStyle.scss";
import React from 'react';
const   ProudOfPolandMain = (props)=> {
  
    return (
      <div className="proud-of-poland">
        <img
          className="d-block  proud-poland-picture-main"
          src={props.img}
          alt={props.alt}
        />
        
        <div className="occasion-text-container">
          <h4>
            <div className="occasion-text">PROUD OF POLAND</div>
          </h4>

        </div>
        <div className="proud-poland-text">Zobacz jak możesz poznać Polskę i odkryć jej niezwykłe piękno - poznaj nowoczesne wydanie tradycyjnego polskiego folkloru.</div>
        <div className="poland-proud-button"><span>Poznaj całą kolekcję&#62;</span></div>
      </div>
    );
  
}

export default ProudOfPolandMain;