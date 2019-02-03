// Modules
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

// Theme
import { primaryTheme } from '../../styles/theme';

// Component
import Button from './Button';

describe('Button', () => {
    const wrapper = shallow(<Button>Text button</Button>);

    test('Render without crashing', () => {
        shallow(<Button>Text button</Button>);
    })

    test('It exist', () => {
        expect(wrapper.find('#testButton')).toExist();
    })

    test('At least one', () => {
        expect(wrapper).toContainMatchingElement('#testButton');
    })

    test('Have display name', () => {
        expect(wrapper.find('#testButton')).toHaveDisplayName('ButtonElement');
    })

    test('Match selector', () => {
        expect(wrapper.find('#testButton')).toMatchSelector('ButtonElement');
    })

    test('Have props', () => {
        expect(wrapper.find('#testButton')).toHaveProp('color');
        expect(wrapper.find('#testButton')).toHaveProp('padding');
        expect(wrapper.find('#testButton')).toHaveProp('rounded');
        expect(wrapper.find('#testButton')).toHaveProp('bold');
        expect(wrapper.find('#testButton')).toHaveProp('fontSize');
        expect(wrapper.find('#testButton')).toHaveProp('onClick');
    })

    it('Render correctly', () => {
        const tree = renderer.create(
            <ThemeProvider theme={primaryTheme}>
                <Button color="primary" padding="md" rounded="md" bold={true} fontSize="md" onClick={() => {}}>
                    Text button
                </Button>
            </ThemeProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})