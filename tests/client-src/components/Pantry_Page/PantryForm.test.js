import React, { useEffect, useContext, useState } from 'react';
import { shallow, mount, render } from 'enzyme';
import Pantry from '../../../../client/src/components/Pantry_Page/index';
import PantryForm from '../../../../client/src/components/Pantry_Page/PantryForm';
import { PantryContext } from '../../../../client/src/state_&_contexts/PantryContext';

describe('Pantry Form', () => {
  test('Pantry Form in Pantry View', () => {
    const wrapper = shallow(<Pantry />);
    expect(wrapper.find(PantryForm)).toHaveLength(1);
  });

  // test('Renders Pantry Form inputs', () => {
    // const wrapper = mount(<PantryContext autocompOpts={[]}><Pantry /></PantryContext>3);
    // expect(wrapper.find('#pantryFormItem')).toHaveLength(1);
    // expect(wrapper.find('#pantryFormUnit')).toHaveLength(1);
    // expect(wrapper.find('#pantryFormQuantity')).toHaveLength(1);
    // expect(wrapper.find('#pantryFormItem').type()).toEqual('input');
    // expect(wrapper.find('#pantryFormUnit').type()).toEqual('input');
    // expect(wrapper.find('#pantryFormQuantity').type()).toEqual('input');
  // });
});
