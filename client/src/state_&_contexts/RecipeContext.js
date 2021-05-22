import React, { createContext, useContext, useState } from 'react';

export const RecipeContext = createContext({});

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState([]);

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        setRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
