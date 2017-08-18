/**
*
* Slider
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

import LeftIcon from 'react-icons/lib/fa/chevron-left';
import RightIcon from 'react-icons/lib/fa/chevron-right';

export default class Slider extends React.PureComponent {
  render() {
    return (
      <div>

        <div className="slider">

          <img className="slideImage" src={require('../../images/slide5.jpg')}/>
          <LeftIcon className="sliderIcon" />
          <RightIcon className="sliderIcon" />
           
                                                                        .

        </div>

      </div>
    );
  }
}

Slider.contextTypes = {
  router: React.PropTypes.object
};
