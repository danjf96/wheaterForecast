/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import CurrentTemperature from '../../src/components/currentTemperature'
 // Note: test renderer must be required after react-native.
 import { render } from 'react-native-testing-library';
import { convertMeterInKM } from '../../src/utils/functions';
 
 const fakeValue = {
    temperature: 10, 
    temp_min: 2, 
    temp_max: 11, 
    description: 'testDescription', 
    icon: 'testIcon', 
    windSpeed: 13
}

it('renders correctly', async () => {
    const screen = render(<CurrentTemperature {...fakeValue}/>)
    expect(screen.toJSON()).toMatchSnapshot()
});

describe('more tests', () => {

    it('values', async () => {
        const { getAllByText } = render(<CurrentTemperature {...fakeValue}/>)
        
        expect(getAllByText(/10|2|11|testIcon|testDescription/)).toBeTruthy()
    });

    it('wind convert values', async () => {
        const { getAllByText } = render((<CurrentTemperature {...fakeValue}/>))
        const wind = convertMeterInKM(fakeValue.windSpeed)
        expect(getAllByText(`Ventos: ${wind} Km/h`)).toBeTruthy()
    })
})
 