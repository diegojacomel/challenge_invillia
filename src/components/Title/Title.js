/** Modules */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderStyle = styled.h1`
    display: block;
    line-height: 1.2;
    font-family: 'Open Sans', Arial, sans-serif;
    color: ${props => props.theme.colors[props.color]};
    text-align: ${props => props.alignCenter ? "center" : "left"};
    font-size: ${props => props.theme.fontSize[props.fontSize]};
    margin: ${props => props.theme.spacing.md} ${props => props.theme.spacing.none} ${props => props.theme.spacing.none};
`

const Header = ({ children, color, alignCenter, fontSize }) => (
    <HeaderStyle color={color} alignCenter={alignCenter} fontSize={fontSize}>
        {children}
    </HeaderStyle>
)

function Title({ children, color, alignCenter, fontSize }) {
    return (
        <Header color={color} alignCenter={alignCenter} fontSize={fontSize} id="testTitle">
            {children}
        </Header>
    )
}

Title.propTypes = {
    color: PropTypes.string,
    alignCenter: PropTypes.bool,
    fontSize: PropTypes.string
}

Title.defaultProps = {
    color: "primary",
    alignCenter: false,
    fontSize: "lg"
}

export default Title;
