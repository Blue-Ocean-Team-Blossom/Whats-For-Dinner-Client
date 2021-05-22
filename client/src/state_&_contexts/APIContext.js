/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { RecipeContext } from './RecipeContext';
import { PantryContext } from './PantryContext';

export const APIContext = createContext({});

const APIProvider = ({ children }) => {

  /*********************************FUNCTION CALLS GO HERE************************************/

  /*******************************************************************************************/

  return (
    <APIContext.Provider value={{
      /* Include functions here */
    }}>
      {children}
    </APIContext.Provider>
  )
};

export default APIProvider;