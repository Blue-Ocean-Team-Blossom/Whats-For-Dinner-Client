/* eslint-disable */
import React, { useContext } from 'react';
import { RecipeContext } from '../../state_&_contexts/RecipeContext';

const Nav = (props) => {
  const { showpantryrecipes, setShowpantryrecipes } = useContext(RecipeContext);

  const changeRecipeView = (boolean) => {
    setShowpantryrecipes(boolean);
  }

  return (
    <div>
      <button className='btn fill' onClick={() => {props.changeView('recipeList'), changeRecipeView(true)}}>Home</button>
      <button className='btn fill' onClick={() => props.changeView('pantryList')}>Pantry</button>
      {props.homeView === 'recipeList' ?
        showpantryrecipes ?
        <button className='btn fill' onClick={() => changeRecipeView(false)}>Search Recipes</button>
        : <button className='btn fill' onClick={() => changeRecipeView(true)}>Suggested Recipes</button>
      : null}
    </div>
  )
}

export default Nav;
