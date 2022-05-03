/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Container from '../../src/components/container'
 // Note: test renderer must be required after react-native.
 import { render } from 'react-native-testing-library';
 
 it('renders correctly', async () => {
   const screen = render(<Container />)
   expect(screen.toJSON()).toMatchSnapshot()
 });

 