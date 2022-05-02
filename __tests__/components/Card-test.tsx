/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Card from '../../src/components/card'
 // Note: test renderer must be required after react-native.
 import { render } from 'react-native-testing-library';
 
 it('renders correctly', async () => {
   const screen = render(<Card />)
   expect(screen.toJSON()).toMatchSnapshot()
 });
 