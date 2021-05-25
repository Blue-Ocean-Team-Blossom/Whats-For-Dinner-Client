import React, { useEffect, useContext, useState } from 'react';
import { APIContext } from '../../state_&_contexts/APIContext';
import { PantryContext } from '../../state_&_contexts/PantryContext';

const PantryForm = () => {
  const { addToPantry, autocomplete } = useContext(APIContext);
  const { autocompOpts } = useContext(PantryContext);
  return (
    <form id="pantryForm" onSubmit={(e) => addToPantry(e)}>
      <label htmlFor="pantryFormItem">
        Item:
        <br />
        <input type="text" list="pantryInputSelect" id="pantryFormItem" name="pantryFormItem" placeholder="item to add" onChange={autocomplete} />
        <datalist id="pantryInputSelect">
          {autocompOpts.map((option) => (
            <option key={option.id} data={option} value={option.name}>
              {option.name}
            </option>
          ))}
        </datalist>
      </label>
      <label htmlFor="pantryFormUnit">
        Unit measurement:
        <br />
        <input type="text" id="pantryFormUnit" name="pantryFormUnit" placeholder="unit" disabled />
      </label>
      <label htmlFor="pantryFormQuantity">
        Quantity:
        <br />
        <input type="number" id="pantryFormQuantity" name="pantryFormQuantity" placeholder="greater than zero" step="0.01" min="0.01" />
      </label>
      <button type="pantryFormSubmit" id="pantryFormSubmit">Submit</button>
    </form>
  );
};

export default PantryForm;
