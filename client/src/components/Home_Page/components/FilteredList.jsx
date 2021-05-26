/* eslint-disable */
import React from 'react';

const FilteredList = (props) => {
  const list = props.list.map((ingredient, i) => <div className="filterIngredient" key={i} onClick={() => props.delete(i)}>{ingredient}<div id="mdiv"><div class="mdiv"><div class="md"></div></div></div></div>);
  return (
    <div>
      {list}
      </div>
  );
};

export default FilteredList;
