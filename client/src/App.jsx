/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Pantry from './components/Pantry_Page/index'
import Nav from './components/Home_Page/navigation'
import Home from './components/Home_Page/index'

const App = () => {

  //default view to recipeList
  //let view = 'recipeList';
  const [view, setView] = useState('recipeList')

  //update the view to render
  useEffect(() => {
    renderView(view)
  })

  //changeView function to toggle the view variable
  const changeView = (updateView) => {
    setView(updateView)
  }


  //render function to conditionally render components
  const renderView = (currentView) => {
    if (view === 'recipeList') {
      return (
        <div>
          <h1>Recipe List</h1>
          <Home />
          </div>
      )
    } else if (view === 'pantryList') {
      return (
        <div>
          <h1>Pantry List</h1>
          <Pantry />
          </div>
      )
    }
  }


  return (
    <div>
      <div><Nav changeView={changeView}/></div>
      <div>{renderView()}</div>
    </div>
  );
};

export default App;
