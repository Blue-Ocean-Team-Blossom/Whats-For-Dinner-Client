import React, { useEffect, useContext, useState } from 'react';
import { APIContext } from '../../state_&_contexts/APIContext';

const PantryForm = () => {
  const { addToPantry } = useContext(APIContext);
  const {
    pantryForm, item, unit, quantity, submit,
  } = styles;
  return (
    <form className={pantryForm} onSubmit={(e) => addToPantry(e)}>
      <label className={item} htmlFor="item">
        Item to add to pantry:
        <br />
        <input type="text" id="item" name="item " placeholder="item to add" />
      </label>
      <label className={unit} htmlFor="unit">
        Unit measurement for item:
        <br />
        <input type="text" id="unit" name="unit" placeholder="unit" disabled />
      </label>
      <label className={quantity} htmlFor="quantity">
        Quantity for item:
        <br />
        <input type="number" id="quantity" name="quantity" placeholder="greater than zero" step="0.01" min="0.01" />
      </label>
      <button className={submit} type="submit" id="submit">Submit</button>
    </form>
  );
};

export default PantryForm;
