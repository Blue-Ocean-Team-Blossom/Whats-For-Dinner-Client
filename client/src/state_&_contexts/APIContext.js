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
  const getPantry = () => {
    var sampleItem = {
      id: 1,
      userId: 1,
      ingredientId: 1
      ingredient: 'something',
      quantity: 1
    }
    return sampleItem;
  }

  /*******************************************************************************************/

  return (
    <APIContext.Provider value={{
      /* Include functions here */
      //Pantry
      getPantry
    }}>
      {children}
    </APIContext.Provider>
  )
};

export default APIProvider;