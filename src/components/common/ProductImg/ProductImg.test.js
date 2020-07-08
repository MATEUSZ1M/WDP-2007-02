import React from 'react';
import { shallow } from 'enzyme';
import ProductImg from './ProductImg';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductImg />);
    expect(component).toBeTruthy();
  });
});
