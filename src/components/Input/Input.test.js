// Modules
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

// Theme
import { primaryTheme } from '../../styles/theme';

// Component
import Input from './Input';

describe('Input', () => {
    const wrapper = shallow(<Input />);

    test('Render without crashing', () => {
        shallow(<Input />);
    })

    test('It exist', () => {
        expect(wrapper.find('.testInput')).toExist();
    })

    test('At least one', () => {
        expect(wrapper).toContainMatchingElement('.testInput');
    })

    test('Have display name', () => {
        expect(wrapper.find('.testInput')).toHaveDisplayName('InputElement');
    })

    test('Match selector', () => {
        expect(wrapper.find('.testInput')).toMatchSelector('InputElement');
    })

    test('Have props', () => {
        expect(wrapper.find('.testInput')).toHaveProp('type');
        expect(wrapper.find('.testInput')).toHaveProp('placeholder');
    })

    it('Render correctly', () => {
        const tree = renderer.create(
            <ThemeProvider theme={primaryTheme}>
                <Input value="value" onChange={() => {}} type="text" />
            </ThemeProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})