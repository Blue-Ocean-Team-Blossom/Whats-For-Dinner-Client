/* eslint-disable */
import React from 'react';

const Recipe = (props) => {
  return (
    <ul>
      {props.recipeList.map((recipe, i) =>
        <li key={i}>
          {recipe.id}
        </li>
      )}
    </ul>
  )
}

export default Recipe;