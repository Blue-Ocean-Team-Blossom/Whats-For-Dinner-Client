/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import { PantryContext } from '../../state_&_contexts/PantryContext';
import { RecipeContext } from '../../state_&_contexts/RecipeContext';
import { APIContext } from '../../state_&_contexts/APIContext';
import axios from 'axios';

const Recipe = () => {
  const { pantry } = useContext(PantryContext);
  const { recipe } = useContext(RecipeContext);
  // const {  } = useContext(APIContext);

  return (
    <div></div>
  )
}

export default Recipe;