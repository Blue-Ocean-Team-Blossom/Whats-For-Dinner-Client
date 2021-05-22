/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';

const PantryForm = () => (
  <form>
    <input type="text" />
    <input type="text" />
    <input type="number" placeholder="1" step="0.01" min="0" />
    <button type="submit">Submit</button>
  </form>
);

export default PantryForm;
