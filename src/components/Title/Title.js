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
    margin: ${props => props.marginTop ? `${props.theme.spacing.md} ${props.theme.spacing.none} ${props.theme.spacing.none}` : "0"};
`

const Header = ({ children, color, alignCenter, fontSize, marginTop }) => (
    <HeaderStyle color={color} alignCenter={alignCenter} fontSize={fontSize} marginTop={marginTop}>
        {children}
    </HeaderStyle>
)

function Title({ children, color, alignCenter, fontSize, marginTop }) {
    return (
        <Header color={color} alignCenter={alignCenter} fontSize={fontSize} marginTop={marginTop} id="testTitle">
            {children}
        </Header>
    )
}

Title.propTypes = {
    color: PropTypes.string,
    alignCenter: PropTypes.bool,
    fontSize: PropTypes.string,
    marginTop: PropTypes.bool
}

Title.defaultProps = {
    color: "primary",
    alignCenter: false,
    fontSize: "lg",
    marginTop: false
}

export default Title;
