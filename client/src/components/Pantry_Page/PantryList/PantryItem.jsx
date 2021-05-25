/* eslint-disable */
import React, {useState, useContext} from 'react';
import $ from 'jquery';

import { APIContext } from '../../../state_&_contexts/APIContext';

const PantryItem = (props) => {
  const {updateItem} = useContext(APIContext);

  const [showUpdate, setShowUpdate] = useState(false);

  var item = props.item;
  var deleteFunc = props.delete;
  var itemName = item.ingredient.substring(0, 1).toUpperCase() + item.ingredient.substring(1).toLowerCase();

  var openUpdate = () => {
    setShowUpdate(true);
  }

  var closeUpdate = () => {
    setShowUpdate(false);
  }

  var update = (id, userId, change) => {
    updateItem(id, userId, parseInt(change));
    closeUpdate();
  }

  var add = (id, userId, change, current) => {
    var newQuantity = parseInt(current) + parseInt(change);
    updateItem(id, userId, newQuantity);
    closeUpdate();
  }

  var subtract = (id, userId, change, current) => {
    var newQuantity = parseInt(current) + parseInt(change);
    updateItem(id, userId, newQuantity);
    closeUpdate();
  }


  return (
    <div id='pantryItem'>
      <h3>{itemName}</h3>
      {showUpdate
        ? <div id='updateField'>
            <input type='text' id='updateQuantity' placeholder='Quantity'/>
            <div>
              <button onClick={() => add(item.id, 1, $('#updateQuantity').val(), item.quantity)}> + </button>
              <button onClick={() => subtract(item.id, 1, $('#updateQuantity').val(), item.quantity)}> - </button>
              <button onClick={() => update(item.id, 1, $('#updateQuantity').val())}>Update</button>
              <button onClick={() => closeUpdate()}>Cancel</button>
            </div>
          </div>
        : <h3>{item.quantity}</h3>
      }
      <div id='itemButtons'>
        <button onClick={() => {openUpdate()}}>Update Quantity</button>
        <button onClick={() => {deleteFunc(item.id, 1)}}>Delete Item</button>
      </div>
    </div>
  );
}

export default PantryItem;
