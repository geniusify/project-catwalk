/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable semi */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import Favorite from './Favorite.jsx';

const range = (n) => [...new Array(n)].map((_, idx) => idx + 1);

const AddToCart = ({ style }) => {
  const { skus } = style;
  const availableSkus = Object.entries(skus)
    .filter(([id, sku]) => sku.quantity > 0);

  const [clicked, setClicked] = useState(undefined);
  const [cartSize, setCartSize] = useState(undefined);
  const [skuId, setSkuId] = useState(-1);
  const [sku, setSku] = useState(undefined);
  const [quantity, setQuantity] = useState(undefined);
  const [quantityAvail, setQuantityAvail] = useState(undefined);

  const onSizeChoice = (id) => {
    setSkuId(id);
    setSku(skus[id]);
    setCartSize(skus[id].size);
    setQuantityAvail(skus[id].quantity);
    setQuantity(1);
  };

  const onQuantityChoice = (e) => {
    setQuantity(e.target.value);
  };

  const addButtonEnabled = cartSize !== undefined && quantity !== undefined;

  return (
    <div className="ov-add-to-cart">
      <form>
        <div className="atc1">
          <select
            className="ov-cart-size"
            name="size"
            value={skuId}
            onChange={(e) => onSizeChoice(e.target.value)}
            // onChange={(e) => setCartSize(e.target.value)}
            onClick={() => setClicked(true)}
          >
            {clicked
              ? availableSkus.map((s) => (
                <option key={s[0]} value={s[0]}>{s[1].size}</option>
              ))
              : sku
                ? <option value={sku[1].size}>{sku[1].size}</option>
                : <option value="Select Size">Select Size</option>}
          </select>

          <select
            className="ov-cart-quantity"
            name="quantity"
            value={quantity}
            onChange={onQuantityChoice}
          >
            {quantityAvail
              ? range(Math.min(15, quantityAvail)).map((n) => (
                <option key={n} value={n}>{n}</option>
              ))
              : (<option value="-">-</option>)}
          </select>
        </div>
        <div className="atc2">
          <button
            className={`ov-cart-add ${addButtonEnabled ? 'ov-cart-add-active' : null}`}
            type="button"
            disabled={!addButtonEnabled}
          >
            Add To Bag
          </button>

          <Favorite styleId={style.style_id} />
        </div>
        {/* <div className="ov-cart-like">test</div> */}
      </form>
    </div>
  );
};

export default AddToCart;
