/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import PantryItem from './PantryItem';
import { PantryContext } from '../../../state_&_contexts/PantryContext';
import { APIContext } from '../../../state_&_contexts/APIContext';

const PantryList = () => {
  const { pantry, setPantry } = useContext(PantryContext);
  const { getPantry } = useContext(APIContext);

  useEffect(() => {
    getPantry();
  }, []);

  // console.log(props.pantryList);

  var pantryList = pantry.slice();

  var deleteEntry = (entryId) => {
    console.log(entryId);
    for (var i = 0; i < pantryList.length; i++) {
      if (entryId === pantryList[i].id) {
        console.log(i);
        pantryList.splice(i, 1);
        setPantry(pantryList);
      }
    }
  }

  return (
    <div>
      <h1>Your Pantry</h1>
      {pantryList.map(item =>
        <PantryItem key={item.id} item={item} delete={deleteEntry}/>
      )}
    </div>
  );
}

export default PantryList;
