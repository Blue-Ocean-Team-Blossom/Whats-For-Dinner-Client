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
  const getPantry = async (userId) => {
    var pantryList = await axios.get(`http://3.135.209.178/pantry?id=1`)
    setPantry(pantryList.data);
  }

  const deleteFromPantry = async (id, userId) => {
    console.log(typeof(id));
    axios.delete(`http://3.135.209.178/pantry`, {data: {id: id}})
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
    console.log(typeof(quantity));
    axios.put(`http://3.135.209.178/pantry`, updateData)
    .then (() => {
      getPantry(userId)
    })
    .catch (err => {
      console.log(err)
    })
  }

  const addToPantry = (e) => {
    e.preventDefault();
    const [item, quantity] = [e.target[0].value, e.target[2].value];
    const pantryAddParse = { ingredient: item, quantity };
    const pantryCopy = pantry.slice();
    pantryCopy.push(pantryAddParse);
    setPantry(pantryCopy);
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
