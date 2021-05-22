/* eslint-disable */
import React from 'react';

const Nav = (props) => {
  return (
    <div>
      <button onClick={() => props.changeView('recipeList')}>Home</button>
      <button onClick={() => props.changeView('pantryList')}>Pantry</button>
    </div>
  )
}

export default Nav;
