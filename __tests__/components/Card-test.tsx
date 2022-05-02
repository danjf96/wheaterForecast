/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Card from '../../src/components/card'
 // Note: test renderer must be required after react-native.
 import { render } from 'react-native-testing-library';
import { Text } from 'react-native';
 
 it('renders correctly', async () => {
   const screen = render(<Card />)
   expect(screen.toJSON()).toMatchSnapshot()
 });

 it('renders children', async () => {
  const screen = render(<Card> 
    <Text>CHILDREN</Text>
  </Card>)
  expect(screen.toJSON()).toMatchSnapshot()
  expect(screen.getByText('CHILDREN')).toBeTruthy()
});

 