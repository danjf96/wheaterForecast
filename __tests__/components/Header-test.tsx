
/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Header from '../../src/components/header'
 // Note: test renderer must be required after react-native.
 import { fireEvent, render } from 'react-native-testing-library';
import { RELOAD } from '../../src/assets/GlobalStyles';
 
 const fakeValue = {
    text: 'teste', 
    showIcon: true, 
    onPress: jest.fn(), 
    icon: RELOAD
}

it('renders correctly', async () => {
    const screen = render(<Header {...fakeValue}/>)
    expect(screen.toJSON()).toMatchSnapshot()
});

describe('more tests', () => {

    it('values', async () => {
        const { getAllByText, getByTestId } = render(<Header {...fakeValue}/>)

        expect(getAllByText(/teste/)).toBeTruthy()

        const iconReload = getByTestId('reload')
        fireEvent(iconReload, 'press')
        expect(fakeValue.onPress).toBeCalled()

    });
})
 