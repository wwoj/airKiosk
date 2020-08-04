import React, { Component} from "react";
import Slider from "react-slick";
import {
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getNewsObjects,dataFromJSON } from "../Services/loadNews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/newsCarouselStyle.scss";

import CardObject from "./cardObject";

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
    });
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  fetchJsonFile=()=>{
    dataFromJSON()
    .then(data => {
      console.log("Result:",data)
      this.setState({newsObjects: data});
    })
    .catch(err => console.error(err));
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
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    let carouselObjectArray = [];

    if (this.state.newsObjects.length === 0) {
      return <div>Loader tutaj bedzie na cala szerokosc 80% :)</div>;
    } else {
      carouselObjectArray = this.state.newsObjects.map((element, index) => {
        return (
          <CardObject
          currentPrice={element.price.toFixed(2)}
          img={element.picture}
          alt={element.info}
          title={element.info}
          text = {element.descripton}
          model={2}
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
            {carouselObjectArray}
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
