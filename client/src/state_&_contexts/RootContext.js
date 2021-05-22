import React from 'react';
import APIProvider from './APIContext';
import RecipeProvider from './RecipeContext';
import PantryProvider from './PantryContext';

export const RootProvider = ({ children }) => (
  <PantryProvider>
    <RecipeProvider>
      <APIProvider>
        { children }
      </APIProvider>
    </RecipeProvider>
  </PantryProvider>
);
