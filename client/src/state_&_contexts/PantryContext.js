/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';

import sampleData from './sampleData/samplePantry.js';

export const PantryContext = createContext({});

const PantryProvider = ({ children }) => {
  const [pantry, setPantry] = useState(sampleData.samplePantry);

  return (
    <PantryContext.Provider
      value={{
        pantry,
        setPantry,
      }}
    >
      {children}
    </PantryContext.Provider>
  );
};

export default PantryProvider;
