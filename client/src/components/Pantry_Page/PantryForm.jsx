import React, { useEffect, useContext, useState } from 'react';
import { APIContext } from '../../state_&_contexts/APIContext';
import styles from './pantryForm.module.css';

const PantryForm = () => {
  const { addToPantry } = useContext(APIContext);
  const { pantryForm, item, unit, quantity, submit } = styles;
  return (
    <form className={pantryForm} onSubmit={(e) => addToPantry(e)}>
      <label className={} htmlFor="item">
        Item to add to pantry:
        <br />
        <input type="text" id="item" name="item " placeholder="item to add" />
      </label>
      <label className={} htmlFor="unit">
        Unit measurement for item:
        <br />
        <input type="text" id="unit" name="unit" placeholder="unit" disabled />
      </label>
      <label className={} htmlFor="quantity">
        Quantity for item:
        <br />
        <input type="number" id="quantity" name="quantity" placeholder="greater than zero" step="0.01" min="0.01" />
      </label>
      <button className={} type="submit" id="submit">Submit</button>
    </form>
  );
};

export default PantryForm;
