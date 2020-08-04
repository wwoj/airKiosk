import React from 'react';
import '../style/specialsStyle.scss';
export default class SpecialOfferts extends React.Component{
render(){
    return(

        <div className="special-add-container">
          <div className="special-add-objects">
            <div className="special-background-1"></div>
            <div className="special-bottom-div">
              <div className="special-text-left">
                <span>OSZCZĘDZASZ DO 20%</span>
              </div>
              <div className="special-text-right">
                <span className="special-p-main">Wyprzedaż już trwa</span>
                <span className="special-p-desc">
                  Wszystkie lokalizacje na świecie
                </span>
              </div>
            </div>
          </div>

          <div className="special-add-objects  ">
            <div className=" special-background-2 special-text-container">
              <div className="special-text-main">
                <p>LUKSUSOWY DOJAZD</p>
                <span>Wybierz komfort ponad wszystko.</span>
                <span>Skożystaj z usługi, a dowieziemy cię na pokład</span>
                <span>samolotu limuzyną</span>
              </div>
              <div className="special-text-button">
                <p>Dowiedz się więcej&#62;</p>
              </div>
            </div>
          </div>
        </div>
    )
}
}