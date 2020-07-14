import React from 'react';
import "../style/blueDiv.scss";
import Logo from '../Pictures/../Pictures/deliveryOnBoard.png'
const  CircleInfo = (props)=> {
    const divStyle = {
        background: 'blue',
        backgroundImage: 'url(' + props.backgroundImg + ')',
      };
    return (
        <div className="shopping-info-details">
        <div className="info-details" style={divStyle}> </div>
        <p>{props.infoText}</p>
        </div>
    )
}
export default CircleInfo;