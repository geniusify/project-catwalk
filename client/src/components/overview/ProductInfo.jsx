/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

// eslint-disable-next-line arrow-body-style

const getRatingCount = (ratings) => Object.values(ratings)
  .reduce((sum, n) => sum + Number(n), 0);

const getAverageRating = (ratings) => {
  const ratingSum = Object.entries(ratings)
    .reduce((sum, [rating, count]) => sum + rating * count, 0);
  const count = getRatingCount(ratings);
  return (ratingSum / count).toFixed(1);
};

const ProductInfo = ({
  info, ratings, price, salePrice,
}) => {
  const ratingCount = getRatingCount(ratings);

  return (
    <div className="ov-product-info">
      <div>
        {ratingCount >= 2
          ? (
            <>
              <span>{`${getAverageRating(ratings)} STARS  `}</span>
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
        <img
          src="https://platform-cdn.sharethis.com/img/pinterest.svg"
          alt="share on pinterest"
          title="share on pinterest"
          className="ov-share-pinterest"
          height="24"
        />
        <img
          src="https://platform-cdn.sharethis.com/img/reddit.svg"
          alt="share on reddit"
          title="share on reddit"
          className="ov-share-reddit"
          height="24"
        />
        <img
          src="https://platform-cdn.sharethis.com/img/hackernews.svg"
          alt="share on hackernews"
          title="share on hackernews"
          className="ov-share-hn"
          height="24"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
