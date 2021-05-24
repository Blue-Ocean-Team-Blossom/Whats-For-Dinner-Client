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

  const addToPantry = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // const pantryCopy = pantry.slice()
    // pantryCopy.push(item);
    // setPantry(pantryCopy);
    return;
  }

  /*******************************************************************************************/

  return (
    <APIContext.Provider value={{
      /* Include functions here */
      //Pantry
      getPantry,
      addToPantry
    }}>
      {children}
    </APIContext.Provider>
  )
};

export default APIProvider;