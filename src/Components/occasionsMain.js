import React, { Component } from 'react';
import ShopTopItem, { ShopElement } from "../Components/shopItem";
import ShopItemMain from "../Components/shopItemMain";
import ShopItemElement from "../Components/shopItemElement";
import OccassionObject from "./occassionObject"
export default class OccasionMain extends Component
{
    render()
    {
        return(
            <div className="occasions-main">
          
          <ShopItemMain
            img="https://pl.all.biz/img/pl/catalog/118067.jpeg"
            alt="First Picture"
            text="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
          />
          <OccassionObject
            img="https://visanti.pl/moduly/sklep/UserFiles/big/26/-/Pierscionek-srebrny-z-biala-perla-slodkowodna-ok--6mm.jpg"
            alt="First Picture"
            text="PIERŚCIONEK VISANTI"
            price="89.00"
            oldPrice="129.00"
            info="srebrny z białą perłą słodkowodną ok. 6mm"
          />
          <OccassionObject
            img="https://crewshop.ferier.pl/cache/b/1/7/d/a/b17dad824bfbb02a9c55db8365cef26df8b7d5a6.jpeg?version=v13"
            alt="Bransoletka Visanti"
            text="BRANSOLETA VISANTI"
            price="79.00"
            oldPrice="83.00"
            info="perły łososiowe hodowane. słodkowodne 4-5mm, zapęcie srebrne"
          /> 
          <OccassionObject
          img="https://visanti.pl/moduly/sklep/UserFiles/small/319/-/Naszyjnik-z-perla-shell-wielkosci-20mm-w-kolorze-bialym.jpg"
          alt="Naszyjnik Visanti"
          text="NASZYJNIK VISANTI"
          price="149.00"
          info="z perłą shell wielkości 20mm w kolorze białym"
        />
      
 
        </div>
        )
    }
}