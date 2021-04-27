/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mock from './mockdata.js';

import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import Features from './Features.jsx';

const getDefaultStyleIndex = (styles) => {
  let defaultStyleIndex = 0;
  for (let i = 0; i < styles.length; i++) {
    if (styles[i]['default?']) {
      defaultStyleIndex = i;
      break;
    }
  }
  return defaultStyleIndex;
};

const Overview = ({ productId }) => {
  const [info, setInfo] = useState(undefined);
  const [styles, setStyles] = useState(undefined);
  const [meta, setMeta] = useState(undefined);
  const [styleIndex, setStyleIndex] = useState(0);
  const [style, setStyle] = useState(undefined);
  const [extendedView, setExtendedView] = useState(false);

  const updateStyleIndex = (idx) => {
    setStyleIndex(idx);
    setStyle(styles[idx]);
  };

  useEffect(() => {
    if (!info) {
      axios({ url: `api/products/${productId}`, method: 'get' })
        .then((res) => { setInfo(res.data); })
        .catch((err) => console.log('failed retrieving data', err));
    }
    if (!styles) {
      axios({ url: `api/products/${productId}/styles`, method: 'get' })
        .then((res) => {
          const stylesData = res.data.results;
          const dsi = getDefaultStyleIndex(stylesData);
          setStyleIndex(dsi);
          setStyle(stylesData[dsi]);
          setStyles(stylesData);
        })
        .catch((err) => console.log('failed retrieving data', err));
    }
    if (!meta) {
      axios({ url: `api/reviews/meta?product_id=${productId}`, method: 'get' })
        .then((res) => { setMeta(res.data); })
        .catch(() => console.log('failed retrieving data'));
    }
  }, []);

  const readyToRender = !!(!!info && !!style && !!styles && !!meta);
  let rendering = 'unrendered';

  try {
    rendering = readyToRender
      ? (
        <div
          className={`ov-container${extendedView ? ' ov-container-extended' : ''}`}
        >
          <ImageGallery
            photos={style.photos}
            alt={info.name}
            extendedView={extendedView}
            setExtendedView={setExtendedView}
          />
          {extendedView ? null : (
            <>
              <ProductInfo
                info={info}
                ratings={meta.ratings}
                price={style.original_price}
                salePrice={style.sale_salePrice}
              />
              <ProductDescription
                description={info.description}
                slogan={info.slogan}
              />
              <StyleSelector
                styles={styles}
                index={styleIndex}
                select={updateStyleIndex}
              />
              <AddToCart style={style} />
              <Features features={info.features} />
            </>
          )}

        </div>
      )
      : (<div>loading...</div>);
  } catch (e) {
    console.log('error during rendering:', e);
  }
  return rendering;
};

export default Overview;
