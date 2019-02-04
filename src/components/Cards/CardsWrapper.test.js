// Modules
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

// Theme
import { primaryTheme } from '../../styles/theme';

// Component
import CardWrapper from './CardsWrapper';

describe('CardWrapper', () => {
    const wrapper = shallow(<CardWrapper>Content</CardWrapper>);

    test('Render without crashing', () => {
        shallow(<CardWrapper></CardWrapper>);
    })

    test('It exist', () => {
        expect(wrapper.find('#testCardWrapper')).toExist();
    })

    test('At least one', () => {
        expect(wrapper).toContainMatchingElement('#testCardWrapper');
    })

    test('Have display name', () => {
        expect(wrapper.find('#testCardWrapper')).toHaveDisplayName('CardWrapperElement');
    })

    test('Match selector', () => {
        expect(wrapper.find('#testCardWrapper')).toMatchSelector('CardWrapperElement');
    })

    it('Render correctly', () => {
        const tree = renderer.create(
            <ThemeProvider theme={primaryTheme}>
                <CardWrapper></CardWrapper>
            </ThemeProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})