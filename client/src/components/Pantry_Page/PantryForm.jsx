import React, { useEffect, useContext, useState } from 'react';
import { APIContext } from '../../state_&_contexts/APIContext';

const PantryForm = () => {
  const { addToPantry, autocomplete } = useContext(APIContext);
  return (
    <form id="pantryForm" onSubmit={(e) => addToPantry(e)}>
      <label htmlFor="pantryFormItem">
        Item to add to pantry:
        <br />
        <input type="text" list="pantryInputSelect" id="pantryFormItem" name="pantryFormItem" placeholder="item to add" onChange={autocomplete} />
        <datalist id="pantryInputSelect">
          <option value="Test">Test</option>
        </datalist>
      </label>
      <label htmlFor="pantryFormUnit">
        Unit measurement for item:
        <br />
        <input type="text" id="pantryFormUnit" name="pantryFormUnit" placeholder="unit" disabled />
      </label>
      <label htmlFor="pantryFormQuantity">
        Quantity for item:
        <br />
        <input type="number" id="pantryFormQuantity" name="pantryFormQuantity" placeholder="greater than zero" step="0.01" min="0.01" />
      </label>
      <button type="pantryFormSubmit" id="pantryFormSubmit">Submit</button>
    </form>
  );
};

export default PantryForm;
