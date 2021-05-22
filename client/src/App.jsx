/* eslint-disable */
import React, { useState } from 'react';
import Pantry from './components/Pantry_Page/index'
import Nav from './components/Home_Page/navigation'
import Recipe from './components/Home_Page/index'

const App = () => {

  //default view to recipeList
  //let view = 'recipeList';
  const [view, setView] = useState('recipeList')

  //changeView function to toggle the view variable
  const changeView = (updateView) => {
    setView(updateView)
    renderView(view)
  }


  //render function to conditionally render components
  const renderView = (currentView) => {
    if (view === 'recipeList') {
      return (
        <div>
          <h1>Recipe List</h1>
          </div>
      )
    } else if (view === 'pantryList') {
      return (
        <div>
          <h1>Pantry List</h1>
          </div>
      )
    }
  }


  return (
    <div>
      <div><Nav changeView={changeView}/></div>
      <div>{renderView(view)}</div>
    </div>
  );
};

export default App;
