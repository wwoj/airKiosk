import React, { Component } from "react";
import OccassionCarouser from "../Components/occasioCarousel";
import OccasionMain from "../Components/occasionsMain";
import SpecialOfferts from "../Components/specialOfferts";
import ProudContainer from "../Components/proudContainer";
import ShoppingInfo from "../Components/shoppingInfo";
import NewsCarousel from "../Components/newsCarousel";
import JoinForm from "../Components/joinForm";
import Informations from "../Components/information";
import Footer from "../Components/footer";
import "../airKioskStyle.scss";

export default class Home extends Component {

  render() {
    return (
      <div>
        <OccassionCarouser />
        <OccasionMain />
        <SpecialOfferts />
        <ProudContainer />
        <ShoppingInfo />
        <NewsCarousel />
        <JoinForm />
        <Informations />
        <Footer />
      </div>
    );
  }
}
