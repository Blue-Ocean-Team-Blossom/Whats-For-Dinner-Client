/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { RecipeContext } from './RecipeContext';
import { PantryContext } from './PantryContext';

export const APIContext = createContext({});

const APIProvider = ({ children }) => {

  const { setRecipe, clickedrecipe, setRecipeinfo } = useContext(RecipeContext);
  const { pantry, setPantry } = useContext(PantryContext);
  const { autocompOpts, setAutocompOpts } = useContext(PantryContext);

  /*********************************FUNCTION CALLS GO HERE************************************/


  /****************************************Pantry*********************************************/
  const getPantry = async (userId) => {
    var pantryList = await axios.get(`/pantry`)
    setPantry(pantryList.data);
  }

  const deleteFromPantry = async (id, userId) => {
    console.log(typeof(id));
    axios.delete(`/pantry`, {data: {id: id}})
    .then (() => {
      getPantry(userId)
    })
    .catch (err => {
      console.log(err)
    })
  }

  const updateItem = async(id, userId, quantity) => {
    var updateData = {
      pantryId: id,
      quantity: quantity
    }
    axios.put(`/pantry`, updateData)
    .then (() => {
      getPantry(userId)
    })
    .catch (err => {
      console.log(err)
    })
  }

  const addToPantry = (e) => {
    e.preventDefault();
    const quantity = e.target[2].value;
    const itemData = autocompOpts[0];
    const pantryAddParse = { itemData, quantity };
    axios.post('/pantry', pantryAddParse)
      .then(() => getPantry())
      .catch((err) => false);
  };

  const autocomplete = async (e) => {
    e.preventDefault();
    const { value } = e.target;
    const options = { value };
    if (value.length > 2) {
      var result = await axios.post('/pantry/autocomplete', options)
        .then((success) => success.data)
        .catch((err) => {
          console.error(`Pantry autocomplete error: ${err}`);
          return false;
        });
      if (result) {
        setAutocompOpts(result);
      }
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
      updateItem,
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
