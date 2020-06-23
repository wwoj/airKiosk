import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Carousel_0 from "../Pictures/carousel_0.jpg";
import Carousel_1 from "../Pictures/carousel_4.JPG";
import Carousel_2 from "../Pictures/carousel_2.jpg";
import ShopItem from '../Components/shopItem'
import '../style/home.css'
export default class Home extends Component {
  test = () => {
    alert("Wybrana opcja nr 3");
  };

  render() {
    return (
      <div>
        <div className="wide-div">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carousel_0}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>#AKCJALICYTACJA</h3>
                <p>
                  Cena biletów nowych europoejskich
                  <br />
                  kierunków w Twoich rękach
                </p>
                <button>Licytuj bilet</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carousel_1}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carousel_2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>
                  <button onClick={this.test}>Klikah ziom</button>Third slide
                  label
                </h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="occasions-main">
          <div className="occasion-element">
            <img className="d-block w-100" src={Carousel_0} alt="First slide" />
            <ShopItem/>
          </div>
          <div className="occasion-element">
            <img className="d-block w-100" src={Carousel_0} alt="First slide" />
          </div>
          <div className="occasion-element">
            <img className="d-block w-100" src={Carousel_0} alt="First slide" />
          </div>
          <div className="occasion-element">
            <img className="d-block w-100" src={Carousel_0} alt="First slide" />
          </div>
        
        </div>
        aaa
      </div>
    );
  }
}
