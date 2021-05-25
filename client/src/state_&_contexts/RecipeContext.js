/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';

export const RecipeContext = createContext({});

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState([]);
  const [filteredrecipe, setFilteredrecipe] = useState([]);
  const [recipeinfo, setRecipeinfo] = useState({});

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        setRecipe,
        filteredrecipe,
        setFilteredrecipe,
        recipeinfo,
        setRecipeinfo,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
