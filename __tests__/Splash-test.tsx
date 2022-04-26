/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Splash from '../src/screens/splash'
 // Note: test renderer must be required after react-native.
 import { render } from 'react-native-testing-library';
 
 it('renders correctly', async () => {
   const screen = render(<Splash />)
   expect(screen.toJSON()).toMatchSnapshot()
 });
 