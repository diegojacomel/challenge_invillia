// Modules
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

// Theme
import { primaryTheme } from '../../styles/theme';

// Component
import Image from './Image';

describe('Image', () => {
    const wrapper = shallow(<Image />);

    test('Render without crashing', () => {
        shallow(<Image />);
    })

    test('It exist', () => {
        expect(wrapper.find('#testFigure')).toExist();
        expect(wrapper.find('#testImg')).toExist();
    })

    test('At least one', () => {
        expect(wrapper).toContainMatchingElement('#testFigure');
        expect(wrapper).toContainMatchingElement('#testImg');
    })

    test('Have display name', () => {
        expect(wrapper.find('#testFigure')).toHaveDisplayName('Figure');
        expect(wrapper.find('#testImg')).toHaveDisplayName('Img');
    })

    test('Match selector', () => {
        expect(wrapper.find('#testFigure')).toMatchSelector('Figure');
        expect(wrapper.find('#testImg')).toMatchSelector('Img');
    })

    test('Have props', () => {
        expect(wrapper.find('#testImg')).toHaveProp('title');
        expect(wrapper.find('#testImg')).toHaveProp('src');
        expect(wrapper.find('#testImg')).toHaveProp('alt');
        expect(wrapper.find('#testFigure')).toHaveProp('size');
        expect(wrapper.find('#testFigure')).toHaveProp('margin');
    })

    it('Render correctly', () => {
        const tree = renderer.create(
            <ThemeProvider theme={primaryTheme}>
                <Image src="#" alt="alt" title="title" />
            </ThemeProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})