import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CardObject from "./cardObject";
import CardMain from "./cardMain";

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
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 590,
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
            <CardMain
              img="https://pl.all.biz/img/pl/catalog/118067.jpeg"
              alt="title picture"
              topTitle="BIŻUTERIA VISANTI"
              title="Produkty z oferty SHOP&MORE z dostawą pod wskazany adres na terenie Polsk."
              text="Poznaj całą kolekcję>"
            />
          </div>
          <div>
          <CardObject
          currentPrice="89.00"
          prevPrice="129.00"
          img="https://visanti.pl/moduly/sklep/UserFiles/big/26/-/Pierscionek-srebrny-z-biala-perla-slodkowodna-ok--6mm.jpg"
          alt="PIERŚCIONEK VISANTI IMG"
          title="PIERŚCIONEK VISANTI"
          text="srebrny z białą perłą słodkowodną ok. 6mm"
        />
        </div>
        <div>
        <CardObject
          currentPrice="79.00"
          prevPrice="83.00"
          img="https://crewshop.ferier.pl/cache/b/1/7/d/a/b17dad824bfbb02a9c55db8365cef26df8b7d5a6.jpeg?version=v13"
          alt="BRANSOLETKA VISANTI img"
          title="BRANSOLETKA VISANTI"
          text="perły łososiowe hodowane. słodkowodne 4-5mm, zapęcie srebrne"
        />
        </div>
        <div>
        <CardObject
          currentPrice="149.00"
          prevPrice="189.00"
          img="https://visanti.pl/moduly/sklep/UserFiles/small/319/-/Naszyjnik-z-perla-shell-wielkosci-20mm-w-kolorze-bialym.jpg"
          alt="NASZYJNIK VISANTI img"
          title="NASZYJNIK VISANTI"
          text="z perłą shell wielkości 20mm w kolorze białym"
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

