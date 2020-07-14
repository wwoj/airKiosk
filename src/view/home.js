import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Carousel_0 from "../Pictures/carousel_0.jpg";
import Carousel_1 from "../Pictures/carousel_4.JPG";
import Carousel_2 from "../Pictures/carousel_2.jpg";
import ShopTopItem, { ShopElement } from "../Components/shopItem";
import ProudOfPolandItem from "../Components/proudOfPoland";
import ProudOfPolandMain from "../Components/proudOfPolanMain";
import ShopItemMain from "../Components/shopItemMain";
import ShopItemElement from "../Components/shopItemElement";
import CircleInfo from '../Components/circleInfo';
import ShoppingInfo from '../Components/shoppingInfo';
import "../style/home.css";
import "../airKioskStyle.scss";
import "../style/blueDiv.scss";
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
          <ShopItemMain
            img="https://pl.all.biz/img/pl/catalog/118067.jpeg"
            alt="First Picture"
            text="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
          />
          <ShopItemElement
            img="https://visanti.pl/moduly/sklep/UserFiles/big/26/-/Pierscionek-srebrny-z-biala-perla-slodkowodna-ok--6mm.jpg"
            alt="First Picture"
            text="PIERŚCIONEK VISANTI"
            price="89.00"
            oldPrice="129,00"
            description="srebrny z białą perłą słodkowodną ok. 6mm"
          />
          <ShopItemElement
            img="https://crewshop.ferier.pl/cache/b/1/7/d/a/b17dad824bfbb02a9c55db8365cef26df8b7d5a6.jpeg?version=v13"
            alt="Bransoletka Visanti"
            text="BRANSOLETA VISANTI"
            price="79,00"
            oldPrice="83,00"
            description="perły łososiowe hodowane. słodkowodne 4-5mm, zapęcie srebrne"
          />
          <ShopItemElement
            img="https://visanti.pl/moduly/sklep/UserFiles/small/319/-/Naszyjnik-z-perla-shell-wielkosci-20mm-w-kolorze-bialym.jpg"
            alt="Naszyjnik Visanti"
            text="NASZYJNIK VISANTI"
            price="149,00"
            oldPrice="189,00"
            description="z perłą shell wielkości 20mm w kolorze białym"
          />
        </div>
        <div className="special-offerts">
          <div className="special-objects">
            <div className="special-background-1"></div>
            <div className="special-bottom-div">
              <div className="special-text-1">
                <span>OSZCZĘDZASZ DO 20%</span>
              </div>
              <div className="special-text-2">
                <span className="special-p-main">Wyprzedaż już trwa</span>
                <span className="special-p-desc">
                  Wszystkie lokalizacje na świecie
                </span>
              </div>
            </div>
          </div>

          <div className="special-objects  ">
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
        <div className="proud-of-poland-container special-offerts">
          <ProudOfPolandItem
            img="https://i2.skapiec.pl/1/Vu8ktkpTURBXy83NmJmNTBkYzExZmNhYmMyMWMxYjE5YmUxYTk2NjM5OC5qcGeTlQLNArwAwsOVAgDNArzCw5MJpjdiMTJkMQY/dawanda-pl-folk-budzik-bialy-w-lowickie-wzory-ludowe-75751743.jpg"
            alt="First Picture"
            text="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
            price="123"
          />
          <ProudOfPolandItem
            img="https://i.pinimg.com/originals/07/e5/ba/07e5ba783b57f50c65feb9acb4a05a78.jpg"
            alt="First Picture"
            text="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
            price="123"
          />
          <ProudOfPolandItem
            img="https://folkstar.pl/media/cache/sylius_shop_product_original/folkowe-gadzety-smycz-do-kluczy-lowickie-wzory-ludowe-wycinanka-5450-1.jpg"
            alt="First Picture"
            text="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
            price="123"
          />
          <ProudOfPolandMain
            img="https://cosestetycznego.files.wordpress.com/2012/11/c582owicz.jpg"
            alt="First Picture"
            text="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
            price="123"
          />
        </div>
        <ShoppingInfo/>

      </div>
    );
  }
}
