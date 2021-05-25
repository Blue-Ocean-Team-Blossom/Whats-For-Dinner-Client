/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import FilteredRecipe from './components/FilteredRecipes';
import Recipe from './components/Recipes';

import { RecipeContext } from '../../state_&_contexts/RecipeContext';
import { APIContext } from '../../state_&_contexts/APIContext';

const Home = () => {
  const { recipe, showpantryrecipes } = useContext(RecipeContext);
  const { getRecipesByPantry } = useContext(APIContext);

  useEffect(() => {
    getRecipesByPantry();
  }, [])

  return (
    <div>
      {showpantryrecipes ?
        <Recipe recipeList={recipe}/>
      : <FilteredRecipe />}
    </div>
  )
};

export default Home;
