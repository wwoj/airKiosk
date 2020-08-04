import React, { Component } from "react";
import CardObject from "./cardObject";
import CardMain from "./cardMain";
export default class OccasionCompBig extends Component {
  render() {
    return (
      <div className="occasions-main">
        <CardMain
          img="https://pl.all.biz/img/pl/catalog/118067.jpeg"
          alt="title picture"
          topTitle="BIŻUTERIA VISANTI"
          title="Produkty z oferty SHOP&#38;MORE z dostawą pod wskazany adres na terenie Polsk."
          text="Poznaj całą kolekcję>"
        />
        <CardObject
          currentPrice="89.00"
          prevPrice="129.00"
          img="https://visanti.pl/moduly/sklep/UserFiles/big/26/-/Pierscionek-srebrny-z-biala-perla-slodkowodna-ok--6mm.jpg"
          alt="PIERŚCIONEK VISANTI IMG"
          title="PIERŚCIONEK VISANTI"
          text="srebrny z białą perłą słodkowodną ok. 6mm"
        />
        <CardObject
          currentPrice="79.00"
          prevPrice="83.00"
          img="https://crewshop.ferier.pl/cache/b/1/7/d/a/b17dad824bfbb02a9c55db8365cef26df8b7d5a6.jpeg?version=v13"
          alt="BRANSOLETKA VISANTI img"
          title="BRANSOLETKA VISANTI"
          text="perły łososiowe hodowane. słodkowodne 4-5mm, zapęcie srebrne"
        />
        <CardObject
          currentPrice="149.00"
          prevPrice="189.00"
          img="https://visanti.pl/moduly/sklep/UserFiles/small/319/-/Naszyjnik-z-perla-shell-wielkosci-20mm-w-kolorze-bialym.jpg"
          alt="NASZYJNIK VISANTI img"
          title="NASZYJNIK VISANTI"
          text="z perłą shell wielkości 20mm w kolorze białym"
        />
      </div>
    );
  }
}
