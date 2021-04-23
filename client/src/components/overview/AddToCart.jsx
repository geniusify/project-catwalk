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

  const [clicked, setClicked] = useState(false);
  const [cartSize, setCartSize] = useState(false);
  const [skuId, setSkuId] = useState(-1);
  const [sku, setSku] = useState(false);
  const [quantity, setQuantity] = useState(false);
  const [quantityAvail, setQuantityAvail] = useState(false);

  const onSizeChoice = (id) => {
    setSkuId(id);
    setSku(skus[id]);
    setCartSize(skus[id].size);
    setQuantityAvail(skus[id].quantity);
    setQuantity(1);
  };

  return (
    <div className="ov-add-to-cart">
      <form>
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
          onChange={(e) => setQuantity(e.target.value)}
        >
          {quantityAvail
            ? range(Math.min(15, quantityAvail)).map((n) => (
              <option key={n} value={n}>{n}</option>
            ))
            : (<option value="-">-</option>)}
        </select>

        <button className="ov-cart-add" type="button">Add To Bag</button>

        <Favorite styleId={style.style_id} />
      </form>
    </div>
  );
};

export default AddToCart;
