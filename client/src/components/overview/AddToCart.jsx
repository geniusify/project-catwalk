/* eslint-disable react/prop-types */
/* eslint-disable semi */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';

const AddToCart = ({ style }) => {
  const availableSizes = Object.values(style.skus)
    .filter((sku) => sku.quantity > 0)
    .map((sku) => sku.size);

  return (
    <div className="ov-add-to-cart">
      {availableSizes.join(', ')}
      <form>
        <select className="ov-cart-size" name="size">
          {availableSizes.map((size) => (
            <option value="{size}">{size}</option>
          ))}
        </select>
        <select className="ov-cart-quantity" name="quantity">1</select>
        <button className="ov-cart-add" type="button">Add To Bag</button>
        <button className="ov-cart-like" type="button">*</button>
      </form>
    </div>
  );
};

export default AddToCart;
