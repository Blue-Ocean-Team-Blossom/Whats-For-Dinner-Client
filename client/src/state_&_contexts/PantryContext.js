/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';

import sampleData from './sampleData/samplePantry.js';

export const PantryContext = createContext({});

const PantryProvider = ({ children }) => {
  const [autocompOpts, setAutocompOpts] = useState([]);
  const [pantry, setPantry] = useState([]);
  const [valid, setValid] = useState(true);

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
