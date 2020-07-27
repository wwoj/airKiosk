import React, { Component } from 'react';
import ShopTopItem, { ShopElement } from "../Components/shopItem";
import ShopItemMain from "../Components/shopItemMain";
import ShopItemElement from "../Components/shopItemElement";
import OccassionObject from "./occassionObject";
import OccassionCompBig from './occassionCompBig';
import OccassionCompSmall from './occassionCompSmall';
import Media from 'react-media';
export default class OccasionMain extends Component
{
    render()
    {

      return(
      <Media queries={{ small: { maxWidth: 800 } }}>
      {matches =>
        matches.small ? (
          <OccassionCompSmall/>
        ) : (
          <OccassionCompBig/>
        )
      }
    </Media>
      )
    }
}