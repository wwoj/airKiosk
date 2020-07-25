import React, { Component } from "react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/informationStyle.scss";
export default class Inforamtions extends Component {
  render() {
    return (
      <div className="information-container">
        <div className="informatin-main">
          <div className="information-div">
            <div className="information-title">PRZYDATNE INFORMACJE</div>
            <div className="information-content">
              <p>Regulamin Sklepu</p>
              <p>Regulamin Aukcji biletow lotniczych</p>
              <p>Regulamin Aukcji Bagażu</p>
              <p>Regulamin Aukcji</p>
            </div>
          </div>
          <div className="information-div">
            <div className="information-title">DLA KUPUJĄCEGO</div>
            <div className="information-content">
              <p>Pomoc</p>
              <p>Sposoby dostawy</p>
              <p>Zwroty i gwarancje</p>
              <p>Oferta Miles&#38;More</p>
              <p>Mapa serwisu</p>
            </div>
          </div>
          <div className="information-div">
            <div className="information-title">KONTAKT</div>
            <div className="information-content">
              <div className="information-contact-type">
                <FontAwesomeIcon icon={faPhone} size="3x" />
                <div className="information-contact-text">
                  <p>Telefon</p>
                  <a href="tel:+19862657834"><p>01-012-234-34</p></a>
                </div>
              </div>
              <div className="information-contact-type">
                <FontAwesomeIcon icon={faEnvelope} size="3x" />{" "}
                <div className="information-contact-text">
                  <p className="contact-form-a">Formularz kontaktowy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="information-div">
            <div className="information-title">METODY PTNOŚCI</div>
            <div className="information-content">
              <div>
                <div className="container-card-logo">
                  <div className="square-www">
                    <img
                      src="https://lh3.googleusercontent.com/proxy/XycGXC39JXUVbPuGTSpfLUmCFOQ5lOwhFAERwI2apew8-N86s6Y1aSYscxvrrUw3EeL9HwWGrenWOjsH94Sbn_UzRaUt4x3rDerYRGZTaS0PtKxQpnQ_jzzuspjJbg"
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
        </div>
      </div>
    );
  }
}
