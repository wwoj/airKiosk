import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
// import Carousel_0 from "../Pictures/carousel_0.jpg";
import Carousel_1 from "../Pictures/carousel_4.JPG";
// import Carousel_2 from "../Pictures/carousel_2.jpg";
import "../style/occassionStyle.scss";
export default class OccassionCarousel extends Component {
  
  render() {
    
    return (
      <div className="wide-div">
        <Carousel interval="100000">
          <Carousel.Item>
            <img className="d-block w-100" src="https://i0.wp.com/ournextlife.com/wp-content/uploads/2017/03/dreamliner-view.jpg?resize=1200%2C400&ssl=1" alt="First slide" />
            <Carousel.Caption>
              <h3>#AKCJALICYTACJA</h3>
              <p>
                Cena biletów nowych europoejskich
                <br />
                kierunków w Twoich rękach
              </p>
              <button className="occassion-carousel-button">
                Licytuj bilet
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Carousel_1} alt="Third slide" />

            <Carousel.Caption>
              <h3>Wybierz miejsce</h3>
              <p>Możliwość zarezerwowania swojego miejsce na pokładzie naszych samolotow.</p>
              <button className="occassion-carousel-button">Rezerwuj miejsce</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://gray-wdtv-prod.cdn.arcpublishing.com/resizer/7jJmmGgC6TbcLEd5Jl2J4uxz-TQ=/1200x400/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/JCPK4VOUNJK3TLOJB2K4KPOOUA.jpg" alt="Third slide" />

            <Carousel.Caption>
              <h3>#GDZIEJALECĘ</h3>
              <p>
                Specjalna oferta! Wylosuj miejsce swojej podróży.<br/>
                Cel swojej podróży poznasz dopiero na lotnisku!
              </p>
              <button className="occassion-carousel-button">Weź udział</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
