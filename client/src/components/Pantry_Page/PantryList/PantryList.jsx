/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import PantryItem from './PantryItem';
// import { PantryContext } from '../../../state_&_contexts/PantryContext';
// import { APIContext } from '../../../state_&_contexts/APIContext';

const PantryList = (props) => {
// const { pantry } = useContext(PantryContext);
// const { getPantry } = useContext(APIContext);

// useEffect(() => {
//   getPantry();
// }, []);

// console.log(props.pantryList);

  return (
    <div>
      <h1>Your Pantry</h1>
      {props.pantryList.map(item =>
        <PantryItem item={item}/>
      )}
    </div>
  );
}

export default PantryList;
