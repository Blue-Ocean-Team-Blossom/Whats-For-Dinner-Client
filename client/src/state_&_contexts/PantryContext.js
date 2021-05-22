import React, { createContext, useContext, useState } from 'react';

export const PantryContext = createContext({});

const PantryProvider = ({ children }) => {
  const [pantry, setPantry] = useState([]);

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
