import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import Stars from '../shared/Stars.jsx';
import ShareOnSocial from './ShareOnSocial.jsx';

const getRatingCount = (ratings) => Object.values(ratings)
  .reduce((sum, n) => sum + Number(n), 0);

const getAverageRating = (ratings) => {
  const ratingSum = Object.entries(ratings)
    .reduce((sum, [rating, count]) => sum + rating * count, 0);
  const count = getRatingCount(ratings);
  return ratingSum / count;
};

const ProductInfo = ({ info, ratings, price, salePrice }) => {
  const ratingCount = getRatingCount(ratings);
  const averageRating = getAverageRating(ratings);

  return (
    <div className="ov-product-info">
      <h2 className="ov-product-grid-line">{info.name}</h2>
      <div className="ov-product-grid-line">
        {salePrice
          ? (
            <>
              <span className="ov-sale-price">{`$${salePrice}  `}</span>
              <span className="ov-old-price">{`$${price}`}</span>
            </>
          )
          : <span>{`$${price}`}</span>}
      </div>
      <div className="ov-product-grid-line">
        {(ratingCount >= 2) && (
          <>
            <Stars rating={averageRating} clickable={false} />
            <Link className="ov-rr-link" to="reviewsContainer" smooth>
              {`Read all ${ratingCount} reviews`}
            </Link>
          </>
        )}
      </div>
      <h4 className="ov-category ov-product-grid-line">{info.category}</h4>

      <ShareOnSocial
        className="ov-product-grid-line"
        shareUrl="https://example.com/geniusify"
        shareTitle={encodeURI('Are you ready to Geniusify?')}
        shareImageUrl={encodeURI('https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')}
      />
    </div>
  );
};

ProductInfo.propTypes = {
  info: PropTypes.object.isRequired,
  ratings: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductInfo;
