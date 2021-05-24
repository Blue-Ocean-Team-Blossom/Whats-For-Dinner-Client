import React, { useEffect, useContext, useState } from 'react';
import { APIContext } from '../../state_&_contexts/APIContext';

const PantryForm = () => {
  const { addToPantry } = useContext(APIContext);
  return (
    <form onSubmit={(e) => addToPantry(e)}>
      <div>
        <label htmlFor="item">
          Item to add to pantry:
          <br />
          <input type="text" id="item" name="item " placeholder="item to add" />
        </label>
      </div>
      <div>
        <label htmlFor="unit">
          Unit measurement for item:
          <br />
          <input type="text" id="unit" name="unit" placeholder="unit" disabled />
        </label>
      </div>
      <div>
        <label htmlFor="quantity">
          Quantity for item:
          <br />
          <input type="number" id="quantity" name="quantity" placeholder="greater than zero" step="0.01" min="0.01" />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default PantryForm;
