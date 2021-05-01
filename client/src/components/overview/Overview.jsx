import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import Features from './Features.jsx';
import ExtendedViewZoom from './ExtendedViewZoom.jsx';

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
  const modes = { normal: 0, extended: 1, zoomed: 2 };
  const [info, setInfo] = useState(undefined);
  const [styles, setStyles] = useState(undefined);
  const [meta, setMeta] = useState(undefined);
  const [styleIndex, setStyleIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [style, setStyle] = useState(undefined);
  const [viewMode, setViewMode] = useState(modes.normal);
  const [loadingError, setLoadingError] = useState(false);

  const updateStyleIndex = (idx) => {
    setStyleIndex(idx);
    setStyle(styles[idx]);
  };

  const queryApi = (condition, url, cb) => {
    if (!condition) {
      return axios({ url, method: 'get' })
        .then(cb)
        .catch(() => setLoadingError(true));
    }
    return null;
  };

  useEffect(() => {
    queryApi(info, `api/products/${productId}`, (res) => {
      setInfo(res.data);
    });

    queryApi(styles, `api/products/${productId}/styles`, (res) => {
      const stylesData = res.data.results;
      const dsi = getDefaultStyleIndex(stylesData);
      setStyleIndex(dsi);
      setStyle(stylesData[dsi]);
      setStyles(stylesData);
    });

    queryApi(meta, `api/reviews/meta?product_id=${productId}`, (res) => {
      setMeta(res.data);
    });
  }, []);

  const className = {
    [modes.normal]: 'ov-container',
    [modes.extended]: 'ov-container ov-container-extended',
    [modes.zoomed]: 'ov-container-zoomed',
  }[viewMode];

  const handleImageClick = () => {
    setViewMode({
      [modes.normal]: modes.extended,
      [modes.extended]: modes.zoomed,
      [modes.zoomed]: modes.extended,
    }[viewMode]);
  };

  const extendedView = viewMode === modes.extended;

  const readyToRender = (info && style && styles && meta);
  let rendering = 'unrendered';

  rendering = !loadingError
    ? readyToRender ? (
      <div className={className}>
        {viewMode !== modes.zoomed
          ? (
            <>
              <ImageGallery
                photos={style.photos}
                alt={info.name}
                extendedView={extendedView}
                imageIndex={imageIndex}
                setImageIndex={setImageIndex}
                onClick={handleImageClick}
                exitExtended={() => setViewMode(modes.normal)}
              />
              {!extendedView && (
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
            </>
          )
          : (
            <ExtendedViewZoom
              onClick={handleImageClick}
              image={style.photos[imageIndex].url}
            />
          )}
      </div>
    ) : (<div>loading...</div>)
    : (<div>Sorry, something went wrong.</div>);

  return rendering;
};

Overview.propTypes = {
  productId: PropTypes.string,
};

export default Overview;
