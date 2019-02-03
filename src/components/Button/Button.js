/** Modules */
import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyle = styled.button`
    display: inline-block;
    border: none;
    cursor: pointer;
    outline: none;
    font-family: 'Open Sans', Arial, sans-serif;
    background: ${props => props.theme.colors[props.color]};
    color: ${props => props.color !== "warning" ? props.theme.colors.white : props.theme.colors.grayDark};
    padding: ${props => props.theme.doubleSpacing[props.padding]};
    border-radius: ${props => props.theme.rounded[props.rounded]};
    font-weight: ${props => props.bold ? "bold" : "normal"};
    font-size: ${props => props.theme.fontSize[props.fontSize]};
`

const ButtonElement = ({ children, color, padding, rounded, bold, fontSize, onClick }) => (
    <ButtonStyle color={color} padding={padding} rounded={rounded} bold={bold} fontSize={fontSize} onClick={onClick}>
        {children}
    </ButtonStyle>
)

function Button({ children, color, padding, rounded, bold, fontSize, onClick }) {
    return (
        <ButtonElement color={color} padding={padding} rounded={rounded} bold={bold} fontSize={fontSize} onClick={onClick} id="testButton">
            {children}
        </ButtonElement>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    padding: PropTypes.string,
    rounded: PropTypes.string,
    bold: PropTypes.bool,
    fontSize: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    color: "primary",
    padding: "md",
    rounded: "md",
    bold: false,
    fontSize: "sm",
    onClick: () => {}
}

export default Button;