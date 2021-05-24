/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { RecipeContext } from './RecipeContext';
import { PantryContext } from './PantryContext';

export const APIContext = createContext({});

const APIProvider = ({ children }) => {

  const { setRecipe, clickedrecipe, setRecipeinfo } = useContext(RecipeContext);
  const { pantry, setPantry } = useContext(PantryContext);



  /*********************************FUNCTION CALLS GO HERE************************************/


  /****************************************Pantry*********************************************/
  const getPantry = async () => {
    var sampleItem = [{
      id: 1,
      userId: 1,
      ingredientId: 1,
      ingredient: 'something',
      quantity: 1
    },
    {
      id: 2,
      userId: 1,
      ingredientId: 2,
      ingredient: 'something else',
      quantity: 2
    }
    ]
    setPantry(sampleItem);
    return;
  }

  /*******************************************************************************************/

  /***********************************RecipesByPantry*********************************************/

  const getRecipesByPantry = async () => {
    axios.get('/RecipesByPantry')
      .then((success) => {
        setRecipe(success.data);
        return;
      })
      .catch((err) => {
        console.log(err);
      })
  }

  /*******************************************************************************************/

  /***********************************RecipeById*********************************************/

  const getRecipeById = async (id) => {
    axios.get(`/Recipe/${id}`)
      .then((success) => {
        console.log(success.data.summary);
        setRecipeinfo(success.data);
        return;
      })
      .catch((err) => {
        console.log(err);
      })
  }

  /*******************************************************************************************/

  return (
    <APIContext.Provider value={{
      /* Include functions here */
      //Pantry
      getPantry,
      getRecipesByPantry,
      getRecipeById,
    }}>
      {children}
    </APIContext.Provider>
  )
};

export default APIProvider;