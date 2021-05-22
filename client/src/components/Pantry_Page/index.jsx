import React, { useEffect, useContext, useState } from 'react';
import PantryForm from './PantryForm';
import PantryList from './PantryList/PantryList';

import { PantryContext } from '../../state_&_contexts/PantryContext';
import { APIContext } from '../../state_&_contexts/APIContext';

const Pantry = () => {
  const { pantry } = useContext(PantryContext);
  const { getPantry } = useContext(APIContext);

  useEffect(() => {
    getPantry();
  }, []);

  return (
    <div>
      <PantryForm />
      <PantryList pantryList={pantry} />
    </div>
  );
};

export default Pantry;
