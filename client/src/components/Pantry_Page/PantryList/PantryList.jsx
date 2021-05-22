/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import PantryItem from './PantryItem';
import { PantryContext } from '../../../state_&_contexts/PantryContext';
// import { APIContext } from '../../../state_&_contexts/APIContext';

const PantryList = (props) => {
const { pantry, setPantry } = useContext(PantryContext);
// const { getPantry } = useContext(APIContext);

// useEffect(() => {
//   getPantry();
// }, []);

// console.log(props.pantryList);

var pantryList = props.pantryList;

  return (
    <div>
      <h1>Your Pantry</h1>
      {pantryList.map(item =>
        <PantryItem key={item.id} item={item}/>
      )}
    </div>
  );
}

export default PantryList;
