import React, { Component } from "react";

import OccassionCarouser from '../Components/occasioCarousel'
import OccasionMain from '../Components/occasionsMain';
import SpecialOfferts from '../Components/specialOfferts'
import ProudContainer from '../Components/proudContainer'
import ShoppingInfo from '../Components/shoppingInfo';
import NewsCarousel from '../Components/newsCarousel';
import JoinForm from '../Components/joinForm'
import Informations from '../Components/information';
import Footer from '../Components/footer';

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
        <OccassionCarouser/>
        <OccasionMain/>
        <SpecialOfferts/>
        <ProudContainer/>
        <ShoppingInfo/>
        <NewsCarousel/>
        <JoinForm/>
        <Informations/>
        <Footer/>
      </div>
    );
  }
}
