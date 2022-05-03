
/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import RowItem from '../../src/components/rowItem'
 // Note: test renderer must be required after react-native.
 import { render } from 'react-native-testing-library';
 
 let fakeValue = {
    clouds: 1,
    dew_point: 16.08,
    dt: 1651500000,
    feels_like:{
        day: 25.52,
        eve: 22.46,
        morn: 14.87,
        night: 16.76
    },
    humidity: 56,
    moon_phase: 0.06,
    moonrise: 1651487880,
    moonset: 1651527900,
    pop: 0.34,
    pressure: 1016,
    sunrise: 1651482708,
    sunset: 1651523331,
    temp: {day: 25.46, min: 15.03, max: 26.8, night: 16.57, eve: 22.22},
    uvi: 8.35,
    weather: [{
        description: "céu limpo",
        icon: "01d",
        id: 800,
        main: "Clear"
    }],
    wind_deg: 27,
    wind_gust: 4.05,
    wind_speed: 2.38
}

it('renders correctly', async () => {
    const screen = render(<RowItem {...fakeValue}/>)
    expect(screen.toJSON()).toMatchSnapshot()
});

describe('more tests', () => {

    it('values', async () => {
        const { getAllByText } = render(<RowItem {...fakeValue} index={0}/>)

        expect(getAllByText(/Hoje|céu limpo|15|27/)).toBeTruthy()

    });

    it('others values', async () => {
        fakeValue.dt = 1651586400
        const { getAllByText } = render(<RowItem {...fakeValue} index={0}/>)

        expect(getAllByText(/Seg|céu limpo|15|27/)).toBeTruthy()

    });
})
 