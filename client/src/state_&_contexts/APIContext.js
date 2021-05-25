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
    var pantryList = await axios.get('/pantry')
    setPantry(pantryList.data);
    return;
  }

  const deleteFromPantry = async (id) => {
    axios.delete(`/pantry/${id}`)
  }

  const addToPantry = (e) => {
    e.preventDefault();
    const [item, quantity] = [e.target[0].value, e.target[2].value];
    const pantryAddParse = { ingredient: item, quantity };
    const pantryCopy = pantry.slice();
    pantryCopy.push(pantryAddParse);
    setPantry(pantryCopy);
  };

  const autocomplete = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value.length > 2) {
      axios.get()
    }
  };

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
      deleteFromPantry,
      addToPantry,
      autocomplete,
      //Recipes
      getRecipesByPantry,
      getRecipeById,
    }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;
