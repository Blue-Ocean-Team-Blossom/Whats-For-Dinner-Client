/* eslint-disable */
import React, {useState, useContext} from 'react';
import $ from 'jquery';

import { APIContext } from '../../../state_&_contexts/APIContext';

const PantryItem = (props) => {
  const {updateItem} = useContext(APIContext);

  const [showUpdate, setShowUpdate] = useState(false);

  var item = props.item;
  var deleteFunc = props.delete;

  var openUpdate = () => {
    setShowUpdate(true);
  }

  var closeUpdate = (id, userId, quantity) => {
    updateItem(id, userId, parseInt(quantity))
    setShowUpdate(false);
  }

  return (
    <div id='pantryItem'>
      <h3>{item.ingredient}</h3>
      {showUpdate
        ? <div>
            <input type='text' id='updateQuantity' placeholder='Input a new quantity'/>
            <button onClick={() => {closeUpdate(item.id, 1, $('#updateQuantity').val())}}>Submit</button>
          </div>
        : <h3>{item.quantity}</h3>
      }
      <button onClick={() => {openUpdate()}}>Update Quantity</button>
      <button onClick={() => {deleteFunc(item.id, 1)}}>Delete Item</button>
    </div>
  );
}

export default PantryItem;
