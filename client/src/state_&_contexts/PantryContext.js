/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';

import sampleData from './sampleData/samplePantry.js';

export const PantryContext = createContext({});

const PantryProvider = ({ children }) => {
  const [pantry, setPantry] = useState(sampleData.samplePantry);
  const [autocompOpts, setAutocompOpts] = useState([]);

  return (
    <PantryContext.Provider
      value={{
        pantry,
        setPantry,
        autocompOpts,
        setAutocompOpts,
      }}
    >
      {children}
    </PantryContext.Provider>
  );
};

export default PantryProvider;
