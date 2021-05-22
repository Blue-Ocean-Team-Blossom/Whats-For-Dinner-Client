/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import { RecipeContext } from '../../state_&_contexts/RecipeContext';
import { APIContext } from '../../state_&_contexts/APIContext';
import axios from 'axios';

const FilteredRecipe = () => {
  const { recipe } = useContext(RecipeContext);
  // const {  } = useContext(APIContext);

  return (
    <div></div>
  )
}

export default FilteredRecipe;