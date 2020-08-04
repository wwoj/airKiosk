import React, { Component } from "react";
import { faBars, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class InformationSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { visibility: "show" },
      bgColor: "green",
      height: "100px",
      styleAddInfo: boxHide,
      styleCustomerHelp: boxHide,
      styleContact: boxHide,
      stylePayMethod: boxHide,
    };
  }

 
///////////////////// 1
  changeStyleAddInfo = (e) => {
    if (this.state.styleAddInfo.height === "0px") {
      this.setState({
        styleAddInfo: boxShow,
      });
      console.log("Wartosc state war 1:", this.state.styleAddInfo.height);
    } else {
      this.setState({
        styleAddInfo: boxHide,
      });
      console.log("Wartosc state war 2:", this.state.styleAddInfo.height);
    }
  };
  ///////////////////// 2
  changeStyleCustomerHelp= (e) => {
    if (this.state.styleCustomerHelp.height === "0px") {
      this.setState({
        styleCustomerHelp: boxShow,
      });
      console.log("Wartosc state war 1:", this.state.styleCustomerHelp.height);
    } else {
      this.setState({
        styleCustomerHelp: boxHide,
      });
      console.log("Wartosc state war 2:", this.state.styleCustomerHelp.height);
    }
  };
  ////////// 3
  changeStyleContact = (e) => {
    if (this.state.styleContact.height === "0px") {
      this.setState({
        styleContact: boxShow,
      });
      console.log("Wartosc state war 1:", this.state.styleContact.height);
    } else {
      this.setState({
        styleContact: boxHide,
      });
      console.log("Wartosc state war 2:", this.state.styleContact.height);
    }
  };
  ////////// 4
  changeStylePayMethod = (e) => {
    if (this.state.stylePayMethod.height === "0px") {
      this.setState({
        stylePayMethod: boxShow,
      });
      console.log("Wartosc state war 1:", this.state.stylePayMethod.height);
    } else {
      this.setState({
        stylePayMethod: boxHide,
      });
      console.log("Wartosc state war 2:", this.state.stylePayMethod.height);
    }
  };
  render() {
    return (
      <div className="information-container">
        <div className="informatin-main">
          {/* Pierwsze */}
          <div
            className="information-main-buttons"
            onClick={this.changeStyleAddInfo}
          >
            <FontAwesomeIcon icon={faBars} size="3x" />

            <p className="information-button-text">PRZYDATNE INFORMACJE</p>
          </div>
          <div
            className="information-content-small"
            style={this.state.styleAddInfo}
          >
            <p>Regulamin Sklepu</p>
            <p>Regulamin Aukcji biletów lotniczych</p>
            <p>Regulamin Aukcji Bagażu</p>
            <p>Regulamin Aukcji</p>
          </div>

          {/* Drugie */}
          <div
            className="information-main-buttons"
            onClick={this.changeStyleCustomerHelp}
          >
            <FontAwesomeIcon icon={faBars} size="3x" />

            <p className="information-button-text">DLA KUPUJĄCEGO</p>
          </div>
          <div
            className="information-content-small"
            style={this.state.styleCustomerHelp}
          >
            <p>Pomoc</p>
            <p>Sposoby dostawy</p>
            <p>Zwroty i gwarancje</p>
            <p>Oferty MILES&#38;MORE</p>
            <p>Mapa serwisu</p>
          </div>
          {/* Trzecie */}
          <div
            className="information-main-buttons"
            onClick={this.changeStyleContact}
          >
            <FontAwesomeIcon icon={faBars} size="3x" />

            <p className="information-button-text">KONTAKT</p>
          </div>
          <div
            className="information-content-small"
            style={this.state.styleContact}
          >
            <div className="information-contact-type">
              <FontAwesomeIcon icon={faPhone} size="3x" />
              <div className="information-contact-text">
                <p>Telefon</p>
                <a href="tel:+19862657834">
                  <p>01-012-234-34</p>
                </a>
              </div>
            </div>
            <div className="information-contact-type">
              <FontAwesomeIcon icon={faEnvelope} size="3x" />{" "}
              <div className="information-contact-text">
                <p className="contact-form-a">Formularz kontaktowy</p>
              </div>
            </div>
          </div>
          {/* Czwarte */}
          <div
            className="information-main-buttons"
            onClick={this.changeStylePayMethod}
          >
            <FontAwesomeIcon icon={faBars} size="3x" />

            <p className="information-button-text">METODY PŁATNOŚCI</p>
          </div>
          <div
            className="information-content-small"
            style={this.state.stylePayMethod}
          >
            <div className="container-card-logo">
                  <div className="square-www">
                    <img
                      src="https://brand.mastercard.com/content/dam/mccom/brandcenter/brand-history/brandhistory_mc1990_100_2x.png"
                      alt="Master Card Logo"
                    />
                  </div>
                  <div className="square-www">
                    <img
                      src="https://seeklogo.com/images/V/VISA-logo-62D5B26FE1-seeklogo.com.png"
                      alt="Visa Card Logo"
                    />
                  </div>
                  <div className="square-www">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784403_960_720.png"
                      alt="PayPal Logo"
                    />
                  </div>
                </div>
                <div className="container-card-logo">
                  <div className="square-www">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Maestro_1992_logo.svg/2000px-Maestro_1992_logo.svg.png"
                      alt="Maestra Card Logo"
                    />
                  </div>
                  <div className="square-www">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/payment-methods-8/87/visa_electron_2-512.png"
                      alt="Visa Electron Logo"
                    />
                  </div>
                  <div className="square-www">
                    <img
                      src="https://i1.wp.com/www.bluewindmarketing.com/wp-content/uploads/2020/02/american-express-logo.png?ssl=1"
                      alt="American Express Logo"
                    />
                  </div>
                </div>
          </div>
        </div>
      </div>
    );
  }
}




const boxHide = {
  backgroundColor: "white",
  height: "0px",
  border: "none",
};
const boxShow = {
  backgroundColor: "white",
  height: "200px",
};
