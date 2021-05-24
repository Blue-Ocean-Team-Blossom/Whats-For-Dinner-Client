import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client/src/App';

describe('App Component', () => {
  test('Renders App Component', () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug()); // shows html inside rendered component
  });
});
