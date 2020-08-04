import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CardObject from "./cardObject";
import CardMain from "./cardMain";
import '../style/proudOfPoloandStyle.scss'
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
        // {
        //   breakpoint: 700,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 2,
        //     initialSlide: 2,
        //   },
        // },
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
      <div className="proud-of-poland-container ">
        <div className="news-nav">
          <button className="news-nav-button" onClick={this.previous}>
            <FontAwesomeIcon icon={faAngleLeft} size="3x" />
          </button>
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
          <CardObject
          currentPrice="59,00"
          img="https://i2.skapiec.pl/1/Vu8ktkpTURBXy83NmJmNTBkYzExZmNhYmMyMWMxYjE5YmUxYTk2NjM5OC5qcGeTlQLNArwAwsOVAgDNArzCw5MJpjdiMTJkMQY/dawanda-pl-folk-budzik-bialy-w-lowickie-wzory-ludowe-75751743.jpg"
          alt="Budzik Łowicki img"
          title="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
          model={2}
        />
          </div>
          <div>
          <CardObject
          currentPrice="6,00"
          img="https://i.pinimg.com/originals/07/e5/ba/07e5ba783b57f50c65feb9acb4a05a78.jpg"
          alt="Magnes łowicki img"
          title="MAGNES ŁOWICKI W KOLORZE BIAŁYM"
          model={2}
        />
        </div>
        <div>
        <CardObject
          currentPrice="10,00"
          img="https://folkstar.pl/media/cache/sylius_shop_product_original/folkowe-gadzety-smycz-do-kluczy-lowickie-wzory-ludowe-wycinanka-5450-1.jpg"
          alt="sMYCZ łowicka img"
          title="SMYCZ ŁOWICKA W KOLORZE CZARNYM"
          model={2}
        />
        </div>
        <div>
        <CardMain
          img="https://pl.all.biz/img/pl/catalog/118067.jpeg"
          alt="PROUD POLAND IMG"
          topTitle="PROUD OF POLAND"
          title="Zobacz jak możesz poznać Polskę i odkryć jej niezwykłe piękno - poznaj nowoczesne wydanie polskiego tradycujnego folkloru."
          text="Poznaj całą kolekcję>"
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


