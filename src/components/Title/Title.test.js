// Modules
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

// Theme
import { primaryTheme } from '../../styles/theme';

// Component
import Title from './Title';

describe('Title', () => {
    const wrapper = shallow(<Title />);

    test('Render without crashing', () => {
        shallow(<Title />);
    })

    test('It exist', () => {
        expect(wrapper.find('#testTitle')).toExist();
    })

    test('At least one', () => {
        expect(wrapper).toContainMatchingElement('#testTitle');
    })

    test('Have display name', () => {
        expect(wrapper.find('#testTitle')).toHaveDisplayName('Header');
    })

    test('Match selector', () => {
        expect(wrapper.find('#testTitle')).toMatchSelector('Header');
    })

    test('Have props', () => {
        expect(wrapper.find('#testTitle')).toHaveProp('color');
        expect(wrapper.find('#testTitle')).toHaveProp('alignCenter');
        expect(wrapper.find('#testTitle')).toHaveProp('fontSize');
        expect(wrapper.find('#testTitle')).toHaveProp('marginTop');
    })

    it('Render correctly', () => {
        const tree = renderer.create(
            <ThemeProvider theme={primaryTheme}>
                <Title color="black" alignCenter={true} fontSize="lg">
                    Title Example
                </Title>
            </ThemeProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})