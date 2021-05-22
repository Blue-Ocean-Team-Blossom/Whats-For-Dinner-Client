/* eslint-disable */
import React from 'react';

const PantryItem = (props) => {
  var item = props.item;
  return (
    <div>
      <h3>Item: {item.ingredient} </h3>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}

export default PantryItem;
