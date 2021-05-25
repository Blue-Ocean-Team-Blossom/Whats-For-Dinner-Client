/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import PantryForm from './PantryForm';
import PantryList from './PantryList/PantryList';

// import { PantryContext } from '../../state_&_contexts/PantryContext';
// import { APIContext } from '../../state_&_contexts/APIContext';

const Pantry = () => {
  // const { pantry } = useContext(PantryContext);
  // const { getPantry } = useContext(APIContext);

  // useEffect(() => {
  //   getPantry();
  // }, []);

  return (
    <div id='pantrySection'>
      <h1 id='pantryTitle'>Pantry List</h1>
      <PantryForm />
      {/* <PantryList pantryList={pantry} /> */}
      <PantryList />
    </div>
  );
};

export default Pantry;
