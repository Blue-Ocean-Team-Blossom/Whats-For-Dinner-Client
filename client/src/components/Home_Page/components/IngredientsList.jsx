/* eslint-disable */
import React from 'react';

const IngredientsList = (props) => {
  const list = props.list.map((ingredient, i) => <div className="ingredient" key={i} onClick={props.add}>{ingredient.name}</div>);
  return (
    <div>
      {list}
    </div>
  );
};

export default IngredientsList;
