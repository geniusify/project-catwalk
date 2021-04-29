/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

import Stars from '../shared/Stars.jsx';

// eslint-disable-next-line arrow-body-style

const getRatingCount = (ratings) => Object.values(ratings)
  .reduce((sum, n) => sum + Number(n), 0);

const getAverageRating = (ratings) => {
  const ratingSum = Object.entries(ratings)
    .reduce((sum, [rating, count]) => sum + rating * count, 0);
  const count = getRatingCount(ratings);
  return ratingSum / count;
};

const shareUrl = 'https://example.com/geniusify';
const shareTitle = encodeURI('Are you ready to Geniusify?');
const shareImageUrl = encodeURI('https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');

const ProductInfo = ({
  info, ratings, price, salePrice,
}) => {
  const ratingCount = getRatingCount(ratings);
  const averageRating = getAverageRating(ratings);
  const [rating, setRating] = useState(averageRating);
  return (
    <div className="ov-product-info">
      <div>
        {ratingCount >= 2
          ? (
            <>
              <Stars rating={averageRating} clickable={false} />
              <Link className="ov-rr-link" to="reviewsContainer" smooth>
                {`Read all ${ratingCount} reviews`}
              </Link>
            </>
          ) : null}
      </div>
      <div>
        <h4 className="ov-category">{info.category}</h4>
      </div>
      <div>
        <h2>{info.name}</h2>
      </div>
      <div>
        {salePrice
          ? (
            <>
              <span className="ov-sale-price">{`$${salePrice}  `}</span>
              <span className="ov-old-price">{`$${price}`}</span>
            </>
          )
          : <span>{`$${price}`}</span>}
      </div>
      <div className="ov-share-on-social">
        <br />

        <a href={`//pinterest.com/pin/create/link/?url=${shareUrl}&media=${shareImageUrl}&description=${shareTitle}`}>
          <img
            src="https://platform-cdn.sharethis.com/img/pinterest.svg"
            alt="share on pinterest"
            title="share on pinterest"
            className="ov-share-pinterest"
            height="24"
          />
        </a>

        <a href={`http://www.reddit.com/submit?url=${shareUrl}&title=${shareTitle}`}>
          <img
            src="https://platform-cdn.sharethis.com/img/reddit.svg"
            alt="share on reddit"
            title="share on reddit"
            className="ov-share-reddit"
            height="24"
          />
        </a>

        <a href={`http://news.ycombinator.com/submitlink?u=${shareUrl}&t=${shareTitle}`}>
          <img
            src="https://platform-cdn.sharethis.com/img/hackernews.svg"
            alt="share on hackernews"
            title="share on hackernews"
            className="ov-share-hn"
            height="24"
          />
        </a>
      </div>
    </div>
  );
};

export default ProductInfo;
