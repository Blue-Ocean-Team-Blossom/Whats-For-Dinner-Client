/* eslint-disable */
import React from 'react';

const PantryItem = (props) => {
  var item = props.item;
  var deleteFunc = props.delete;
  return (
    <div>
      <h3>Item: {item.ingredient} </h3>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => {deleteFunc(item.id)}}>x</button>
    </div>
  );
}

export default PantryItem;
