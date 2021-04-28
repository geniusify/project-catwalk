import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
        <div className="carouselInnerDiv">
          <img className="relatedProductsImage"
          src={this.props.riImage}>
          </img>
          <p className="relatedProductText">
            {this.props.riCategory}<br />
           <br />
            <b>{this.props.riName}</b><br />
            {this.props.riStyle}<br /><br />
            {this.props.riPrice}<br /><br />

              <FontAwesomeIcon icon={faStar} color="red"/>
              <FontAwesomeIcon icon={faStar} color="red"/>
              <FontAwesomeIcon icon={faStar} color="red"/>
              <FontAwesomeIcon icon={faStar} color="red"/>
              <FontAwesomeIcon icon={faStar} color='black' />
          </p>
        </div>
    );
  }
}

export default RelatedItems;
