/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { RecipeContext } from './RecipeContext';
import { PantryContext } from './PantryContext';

export const APIContext = createContext({});

const APIProvider = ({ children }) => {
  const { pantry, setPantry } = useContext(PantryContext);

  /*********************************FUNCTION CALLS GO HERE************************************/


  /****************************************Pantry*********************************************/
  const getPantry = async (userId) => {
    var pantryList = await axios.get(`http://3.135.209.178/pantry?id=1`)
    setPantry(pantryList.data);
  }

  const deleteFromPantry = async (id, userId) => {
    console.log('id: ', id);
    // axios.delete(`/pantry`, {
    //   data: {
    //     id: id
    //   }
    // })
    // .then (() => {
    //   getPantry(userId)
    // })
    // .catch (err => {
    //   console.log(err)
    // })
  }

  const updateItem = async(id, userId, quantity) => {
    var updateData = {
      pantryId: id,
      quantity: quantity
    }
    // console.log(updateData);
    axios.put(`http://3.135.209.178/pantry`, {
      data: updateData
    })
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

  return (
    <APIContext.Provider value={{
      /* Include functions here */
      //Pantry
      getPantry,
      deleteFromPantry,
      addToPantry,
      updateItem,
    }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;
