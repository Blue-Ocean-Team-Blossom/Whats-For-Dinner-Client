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
    if (id && userId && quantity) {
      updateItem(id, userId, parseInt(quantity))
    }
    setShowUpdate(false);
  }

  return (
    <div id='pantryItem'>
      <h3>{item.ingredient}</h3>
      {showUpdate
        ? <div id='updateField'>
            <input type='text' id='updateQuantity' placeholder='Quantity'/>
            {/* <div id='updateButtons'> */}
              <button onClick={() => {closeUpdate(item.id, 1, $('#updateQuantity').val())}}>Submit</button>
              <button onClick={() => closeUpdate()}>Cancel</button>
            {/* </div> */}
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
