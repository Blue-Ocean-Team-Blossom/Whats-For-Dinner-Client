/* eslint-disable */
import React from 'react';

const FilteredList = (props) => {
  const list = props.list.map((ingredient, i) => <div key={i} onClick={() => props.delete(i)}>{ingredient}</div>);
  return (
    <div>
      {list}
    </div>
  );
};

export default FilteredList;
