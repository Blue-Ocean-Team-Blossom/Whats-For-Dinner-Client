/* eslint-disable */
import React from 'react';

const PantryItem = (props) => {
  var item = props.item;
  var deleteFunc = props.delete;
  return (
    <div id='pantryItem'>
      <h3>{item.ingredient}</h3>
      <h3>{item.quantity}</h3>
      <button onClick={() => {deleteFunc(item.id)}}>Delete Item</button>
    </div>
  );
}

export default PantryItem;
