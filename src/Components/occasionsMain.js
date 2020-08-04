import React, { Component } from 'react';
import OccassionCompBig from './occassionCompBig';
import OccassionCompSmall from './occassionCompSmall';
import Media from 'react-media';
export default class OccasionMain extends Component
{
    render()
    {

      return(
      <Media queries={{ small: { maxWidth: 1180 } }}>
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