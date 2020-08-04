import React, { Component } from "react";
import '../style/joinFormStyle.scss'
import "../style/navbarStyle.scss";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class JoinForm extends Component {
  test = () => {
    alert("Poszlo?");
  };
  render() {
    return (
      <div className="join-form-container">
        <div className="join-main-container">
          <div className="left-container">
            <div className="join-form-icon">
              <FontAwesomeIcon icon={faEnvelope} size="4x" />
            </div>
            <div className="add-main">
                <h3>
              ZOSTAŃ ŁOWCĄ OKAZJI
              </h3>
              <div className="join-add-text">
                  <p>Zostaw nam swój adres email i upoluj specjalne oferty oraz zniżki na trasach LOTu.</p>
              </div>
            </div>
          </div>
          <div className="right-container">
            <form>
              <div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="emailInput"
                    placeholder="Twój adres email:"
                  />
                  <div className="input-group-prepend join-form-div-button">
                    <input type="submit" value="Dołącz" className="join-form-add-button" />
                  </div>
                </div>
              </div>
              <div className="join-form-text">
                <div className="joinCheckboxFields"> 
                <input type="checkbox"></input>{" "}
                <label>
                   Zgadzam sie na przetwarzanie moich danych przez LOT
                </label>
                <br />
                </div>
                <div className="joinCheckboxFields">
                <input type="checkbox"></input>{" "}
                <label>
                   Zgadzam sie na przetwarzanie moich danych przez partnerów
                </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
