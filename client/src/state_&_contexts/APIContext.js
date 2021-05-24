/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { RecipeContext } from './RecipeContext';
import { PantryContext } from './PantryContext';

export const APIContext = createContext({});

const APIProvider = ({ children }) => {

  const { setPantry } = useContext(PantryContext);

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

  /*******************************************************************************************/

  return (
    <APIContext.Provider value={{
      /* Include functions here */
      //Pantry
      getPantry,
      deleteFromPantry
    }}>
      {children}
    </APIContext.Provider>
  )
};

export default APIProvider;