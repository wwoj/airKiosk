import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Carousel_0 from "../Pictures/carousel_0.jpg";
import Carousel_1 from "../Pictures/carousel_4.JPG";
import Carousel_2 from "../Pictures/carousel_2.jpg";
import "../style/occassionStyle.scss";
export default class OccassionCarousel extends Component {
  render() {
    return (
      <div className="wide-div">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Carousel_0} alt="First slide" />
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
              <h3>Wybierz sobie miejsce</h3>
              <p>Możliwość zarezerwowania swojego miejsce na pokładzie naszych samolotow.</p>
              <button className="occassion-carousel-button">Rezerwuj miejsce</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Carousel_2} alt="Third slide" />

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
