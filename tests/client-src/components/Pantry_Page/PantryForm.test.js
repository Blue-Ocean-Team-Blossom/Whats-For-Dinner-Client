import React from 'react';
import { shallow } from 'enzyme';
import Pantry from '../../../../client/src/components/Pantry_Page/index';
import PantryForm from '../../../../client/src/components/Pantry_Page/PantryForm';

describe('Pantry Form', () => {
  test('Pantry Form in Pantry View', () => {
    const wrapper = shallow(<Pantry />);
    expect(wrapper.find(PantryForm)).toHaveLength(1);
  });

  test('Renders Pantry Form inputs', () => {
    const wrapper = shallow(<PantryForm />);
    expect(wrapper.find('#item')).toHaveLength(1);
    expect(wrapper.find('#item').type()).toEqual('input');
    expect(wrapper.find('#unit').type()).toEqual('input');
    expect(wrapper.find('#quantity').type()).toEqual('input');
  });
});
