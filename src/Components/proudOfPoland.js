import '../style/shopItemStyle.scss'
import '../style/proudOfPoloandStyle.scss'
import React from 'react';
const   ProudOfPolandItem = (props)=> {
  
    return (
      <div className="proud-of-poland">
        <img
          className="d-block  proud-poland-picture"
          src={props.img}
          alt={props.alt}
        />
        
            <div className="occasion-text proud-text-item"><h6>{props.text}</h6></div>
            <div className="currentPrice">{props.price} PLN</div>
      </div>
    );
  
}

export default ProudOfPolandItem;