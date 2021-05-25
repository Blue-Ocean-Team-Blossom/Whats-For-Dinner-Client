/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import FilteredRecipe from './components/FilteredRecipes';
import Recipe from './components/Recipes';

import { RecipeContext } from '../../state_&_contexts/RecipeContext';
import { APIContext } from '../../state_&_contexts/APIContext';

const Home = () => {
  const { recipe } = useContext(RecipeContext);
  const { getRecipesByPantry } = useContext(APIContext);

  useEffect(() => {
    getRecipesByPantry();
  }, [])

  return (
    <div>
      <FilteredRecipe />
      <Recipe recipeList={recipe}/>
    </div>
  )
};

export default Home;
