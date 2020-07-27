import React, { Component } from "react";
import CarouselLink from "./occassionCarouseCompMain";
import OccassionObject from "./occassionObject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/newsCarouselStyle.scss";
import "../style/occassionStyle.scss";

export default class OccasionCompSmall extends Component {
  constructor(props) {
    super(props);
    this.state = { newsObjects: [] };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="occasions-main">
        <div className="news-nav">
          <button className="news-nav-button" onClick={this.previous}>
            <FontAwesomeIcon icon={faAngleLeft} size="3x" />
          </button>
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
            <CarouselLink
              img="https://pl.all.biz/img/pl/catalog/118067.jpeg"
              alt="First Picture"
              text="BUDZIK ŁOWI   CKI W KOLORZE BIAŁYM"
            />
          </div>
          <div>
            <OccassionObject
              img="https://visanti.pl/moduly/sklep/UserFiles/big/26/-/Pierscionek-srebrny-z-biala-perla-slodkowodna-ok--6mm.jpg"
              alt="First Picture"
              text="PIERŚCIONEK VISANTI"
              price="89.00"
              oldPrice="129.00"
              info="srebrny z białą perłą słodkowodną ok. 6mm"
            />
          </div>
          <div>
            <OccassionObject
              img="https://crewshop.ferier.pl/cache/b/1/7/d/a/b17dad824bfbb02a9c55db8365cef26df8b7d5a6.jpeg?version=v13"
              alt="Bransoletka Visanti"
              text="BRANSOLETA VISANTI"
              price="79.00"
              oldPrice="83.00"
              info="perły łososiowe hodowane. słodkowodne 4-5mm, zapęcie srebrne"
            />
          </div>
          <div>
            <OccassionObject
              img="https://visanti.pl/moduly/sklep/UserFiles/small/319/-/Naszyjnik-z-perla-shell-wielkosci-20mm-w-kolorze-bialym.jpg"
              alt="Naszyjnik Visanti"
              text="NASZYJNIK VISANTI"
              price="149.00"
              info="z perłą shell wielkości 20mm w kolorze białym"
            />
          </div>
          <div>
            <CarouselLink
              img="https://pl.all.biz/img/pl/catalog/118067.jpeg"
              alt="First Picture"
              text="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
            />
          </div>
          <div>
            <OccassionObject
              img="https://visanti.pl/moduly/sklep/UserFiles/big/26/-/Pierscionek-srebrny-z-biala-perla-slodkowodna-ok--6mm.jpg"
              alt="First Picture"
              text="PIERŚCIONEK VISANTI"
              price="89.00"
              oldPrice="129.00"
              info="srebrny z białą perłą słodkowodną ok. 6mm"
            />
          </div>
        </Slider>
        <div className="news-nav">
          <button className="news-nav-button" onClick={this.next}>
            <FontAwesomeIcon icon={faAngleRight} size="3x" />
          </button>
        </div>
      </div>
    );
  }
}

{
  /* <ShopItemMain
                img="https://pl.all.biz/img/pl/catalog/118067.jpeg"
                alt="First Picture"
                text="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
              />
              
              
              
               */
}
