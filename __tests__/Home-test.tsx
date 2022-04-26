/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import { act, fireEvent, render, waitFor } from 'react-native-testing-library';
 import Home from '../src/screens/home';
 import store from '../src/store'
 import { Provider } from 'react-redux';
 jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

 const component = (
   <Provider store={store} > <Home navigation={{ navigate: (screen:'string') => null }}/> </Provider>
 );
 
 it('renders correctly', async () => {
   const screen = render(component)
   expect(screen.toJSON()).toMatchSnapshot()
 });
 
 describe('test loading and render items or not', () => {
 
   test('renders correctly loading', async () => {
 
     const { getByTestId, getAllByTestId } = render( component )   
     const weatherForecast = store.getState().weatherForecast
     expect(weatherForecast.location).toBe(undefined)
    //  expect(weatherForecast.loading).toBeTruthy()
 
   });
 
   test('renders correctly location', async () => {
 
        const { getAllByTestId, getByTestId, getByText, update } = await waitFor(() =>
            render(component)
        ); 

        await waitFor( () => {
            const initialMain =  {
                feels_like: 0,
                humidity: 0,
                pressure: 0,
                temp: 0,
                temp_max: 0,
                temp_min: 0
            }
            const weatherForecast = store.getState().weatherForecast
            expect(weatherForecast.main).not.toBe(initialMain) 
        })
 
   });
   
 }) 
   