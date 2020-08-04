import React, { Component } from "react";
import CardObject from "./cardObject";
import CardMain from "./cardMain";
import '../style/proudOfPoloandStyle.scss'
export default class ProudOfPolandBig extends Component {
  render() {
    return (
      <div className="proud-of-poland-container">
        <CardObject
          currentPrice="59,00"
          img="https://i2.skapiec.pl/1/Vu8ktkpTURBXy83NmJmNTBkYzExZmNhYmMyMWMxYjE5YmUxYTk2NjM5OC5qcGeTlQLNArwAwsOVAgDNArzCw5MJpjdiMTJkMQY/dawanda-pl-folk-budzik-bialy-w-lowickie-wzory-ludowe-75751743.jpg"
          alt="Budzik Łowicki img"
          title="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
          model={2}
        />
        <CardObject
          currentPrice="6,00"
          img="https://i.pinimg.com/originals/07/e5/ba/07e5ba783b57f50c65feb9acb4a05a78.jpg"
          alt="Magnes łowicki img"
          title="MAGNES ŁOWICKI W KOLORZE BIAŁYM"
          model={2}
        />
        <CardObject
          currentPrice="10,00"
          img="https://folkstar.pl/media/cache/sylius_shop_product_original/folkowe-gadzety-smycz-do-kluczy-lowickie-wzory-ludowe-wycinanka-5450-1.jpg"
          alt="sMYCZ łowicka img"
          title="SMYCZ ŁOWICKA W KOLORZE CZARNYM"
          model={2}
        />
        <CardMain
          img="https://pl.all.biz/img/pl/catalog/118067.jpeg"
          alt="PROUD POLAND IMG"
          topTitle="PROUD OF POLAND"
          title="Zobacz jak możesz poznać Polskę i odkryć jej niezwykłe piękno - poznaj nowoczesne wydanie polskiego tradycujnego folkloru."
          text="Poznaj całą kolekcję>"
        />
      </div>
    );
  }
}