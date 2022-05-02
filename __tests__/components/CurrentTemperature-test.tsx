/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import CurrentTemperature from '../../src/components/currentTemperature'
 // Note: test renderer must be required after react-native.
 import { render } from 'react-native-testing-library';
import { convertMeterInKM } from '../../src/utils/functions';
import { CURRENTTEMPERATUREPROPS } from '../../src/components/currentTemperature/types';
 
 const fakeValue:CURRENTTEMPERATUREPROPS = {
    temp: 10, 
    temp_min: 2, 
    temp_max: 11, 
    description: 'testDescription', 
    icon: 'testIcon', 
    windSpeed: 13,
    feels_like: 1,
    humidity: 80,
    pressure: 5
}

it('renders correctly', async () => {
    const screen = render(<CurrentTemperature {...fakeValue}/>)
    expect(screen.toJSON()).toMatchSnapshot()
});

describe('more tests', () => {

    it('values', async () => {
        const { getAllByText } = render(<CurrentTemperature {...fakeValue}/>)
        
        expect(getAllByText(/10 °C|2 °C|11 °C|1 °C|5 mbar|80%|testIcon|testDescription/)).toBeTruthy()
    });

    it('wind convert values', async () => {
        const screen = render(<CurrentTemperature {...fakeValue}/>)
        const wind = convertMeterInKM(fakeValue.windSpeed)
        expect(screen.queryByText(`${wind} Km/h`)).toBeTruthy()
    })
})
 