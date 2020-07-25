import React, { Component, useState } from "react";
import Slider from "react-slick";
import {
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getNewsObjects } from "../Services/loadNews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/newsCarouselStyle.scss";
import NewsObjects from "../Components/newsObject";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.state = { newsObjects: [] };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    getNewsObjects().then((object) => {
      this.setState({ newsObjects: object });
      console.log("Pobralem juz wszystko co bylo :)", this.state.newsObjects);
    });
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
    };
    let cos = [];
    let cos1 = [];

    if (this.state.newsObjects.length === 0) {
      return <div>Loader tutaj bedzie na cala szerokosc 80% :)</div>;
    } else {
      cos1 = this.state.newsObjects.map((element, index) => {
        return (
          <NewsObjects
            img={element.picture}
            alt={element.info}
            info={element.info}
            text={element.descripton}
            price={element.price.toFixed(2)}
          />
        );
      });
    }
    return (
      <div className="news-carousel-conrainer">
        <div className = "news-block-title">
          <h4>
            <div className="occasion-text">NOWOŚCI W AIRKIOSKU</div>
          </h4>
        </div>
        <div className="news-carousel">
          <div className="news-nav">
            <button className="news-nav-button" onClick={this.previous}>
              <FontAwesomeIcon icon={faAngleLeft} size="3x" />
            </button>
          </div>

          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {cos1}
          </Slider>

          <div className="news-nav">
            <button className="news-nav-button" onClick={this.next}>
              <FontAwesomeIcon icon={faAngleRight} size="3x" />
            </button>
          </div>
        </div>
        <div className="news-button-div"><button>Więcej nowości&#62;</button></div>
        
      
      </div>
    );
  }
}
