/* eslint-disable */
import React from 'react';

const Nav = (props) => {
  return (
    <div>
      <button className='btn fill' onClick={() => props.changeView('recipeList')}>Home</button>
      <button className='btn fill' onClick={() => props.changeView('pantryList')}>Pantry</button>
    </div>
  )
}

export default Nav;
