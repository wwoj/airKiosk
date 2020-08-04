import React from 'react';
import "../style/shoppingInfoStyle.scss";
const  CircleInfo = (props)=> {
    return (
        <div className="shopping-info-details">
        <div className="info-details" ><img src={props.src} alt={props.alt}/> </div>
        <p>{props.infoText}</p>
        </div>
    )
}
export default CircleInfo;
