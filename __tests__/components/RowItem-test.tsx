
/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import RowItem from '../../src/components/rowItem'
 // Note: test renderer must be required after react-native.
 import { fireEvent, render } from 'react-native-testing-library';
import { RELOAD } from '../../src/assets/GlobalStyles';
 
 const fakeValue = {
    label: 'label', 
    value: 'value',
}

it('renders correctly', async () => {
    const screen = render(<RowItem {...fakeValue}/>)
    expect(screen.toJSON()).toMatchSnapshot()
});

describe('more tests', () => {

    it('values', async () => {
        const { getAllByText } = render(<RowItem {...fakeValue}/>)

        expect(getAllByText(/teste|value/)).toBeTruthy()

    });
})
 