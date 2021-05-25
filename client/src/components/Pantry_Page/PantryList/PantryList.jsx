/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import PantryItem from './PantryItem';
import { PantryContext } from '../../../state_&_contexts/PantryContext';
import { APIContext } from '../../../state_&_contexts/APIContext';

const PantryList = () => {
  const { pantry, setPantry } = useContext(PantryContext);
  const { getPantry, deleteFromPantry } = useContext(APIContext);

  useEffect(() => {
    getPantry(1);
  }, []);

  // console.log(props.pantryList);

  var pantryList = pantry.slice();

  var deleteEntry = (entryId) => {
    console.log(entryId);
    for (var i = 0; i < pantryList.length; i++) {
      if (entryId === pantryList[i].id) {
        pantryList.splice(i, 1);
        setPantry(pantryList);
      }
    }
  }

  return (
    <div id='pantryList'>
      <h1>Your Current Pantry</h1>
      <div id='pantryFeed'>
        <div id='pantryListHeader'>
          <h2>Item</h2>
          <h2>Quantity</h2>
        </div>
        {pantryList.map(item =>
          <PantryItem key={item.id} item={item} delete={deleteFromPantry}/>
        )}
      </div>
    </div>
  );
}

export default PantryList;
