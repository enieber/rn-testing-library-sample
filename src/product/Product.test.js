import React from 'react';
import { shallow, render, fireEvent } from 'react-native-testing-library';
import sinon from 'sinon';

import Product from './Product';

describe('Testing Product Component', () => {
  it('shoult renders without crashing', () => {
    const { getAllByProps } = render(
      <Product
        img=""
        title="Product 1"
        value="100,00"
        description="test description"
        category="Category 1"
        buy={() => {}}
      />,
    );
    const title = getAllByProps({ title: 'Product 1'});
    expect(title).toHaveLength(1);
  });
  it('simulates buy click', () => {
    const onButtonClick = sinon.spy();
    const { getByText } = render(
      <Product
        img=""
        title="Product 1"
        value="100,00"
        description="test description"
        category="Category 1"
        buy={onButtonClick}
      />,
    );
    fireEvent.press(getByText('Comprar'));
    expect(onButtonClick.callCount).toEqual(1);
  });
});
