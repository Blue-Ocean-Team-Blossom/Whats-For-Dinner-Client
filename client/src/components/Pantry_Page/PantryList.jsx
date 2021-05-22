import React, { useEffect, useContext, useState } from 'react';
import { PantryContext } from '../../state_&_contexts/PantryContext';
import { APIContext } from '../../state_&_contexts/APIContext';

const PantryList = () => {
  const { pantry } = useContext(PantryContext);
  const { getPantry } = useContext(APIContext);

  useEffect(() => {
    getPantry();
  }, []);

  console.log(pantry);

  return (
    <div>
      <h1>This is the pantry list</h1>
    </div>
  );
};
export default PantryList;
