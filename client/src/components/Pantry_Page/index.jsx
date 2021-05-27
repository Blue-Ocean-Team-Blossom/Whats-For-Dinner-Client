/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import PantryForm from './PantryForm';
import PantryList from './PantryList/PantryList';

import { UserContext } from '../../state_&_contexts/UserContext';
import { PantryContext } from '../../state_&_contexts/PantryContext';
// import { APIContext } from '../../state_&_contexts/APIContext';

const Pantry = () => {
  const { valid } = useContext(PantryContext);
  // const { getPantry } = useContext(APIContext);
  const { username } = useContext(UserContext);

  var user = username ? username + '\'s ' : username

  // useEffect(() => {
  //   getPantry();
  // }, []);

  return (
    <div id='pantrySection'>
      <br></br>
      <h1 id='pantryTitle'>{user}Pantry List</h1>
      <br></br>
      <div hidden={valid}>
        Please input a valid item.
      </div>
      <PantryForm />
      {/* <PantryList pantryList={pantry} /> */}
      <PantryList />
    </div>
  );
};

export default Pantry;
