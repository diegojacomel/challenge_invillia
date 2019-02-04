// Modules
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

// Theme
import { primaryTheme } from '../../styles/theme';

// Component
import Timer from './Timer';

describe('Timer', () => {
    const wrapper = shallow(<Timer />);

    test('Render without crashing', () => {
        shallow(<Timer />);
    })

    test('It exist', () => {
        expect(wrapper.find('#testTimer')).toExist();
    })

    test('At least one', () => {
        expect(wrapper).toContainMatchingElement('#testTimer');
    })

    test('Have display name', () => {
        expect(wrapper.find('#testTimer')).toHaveDisplayName('TimerElement');
    })

    test('Match selector', () => {
        expect(wrapper.find('#testTimer')).toMatchSelector('TimerElement');
    })

    it('Render correctly', () => {
        const tree = renderer.create(
            <ThemeProvider theme={primaryTheme}>
                <Timer />
            </ThemeProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})