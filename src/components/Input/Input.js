/** Modules */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FieldStyle = styled.input`
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: ${props => props.theme.spacing.sm};
    background: ${props => props.theme.colors.white};
    padding: ${props => props.theme.doubleSpacing.lg};
    margin-top: ${props => props.theme.spacing.sm};
    width: calc(${props => props.theme.spacing.full} - ${props => props.theme.spacing.llg});
    outline: none;
`

const InputElement = ({ onChange, type, placeholder, id }) => (
    <FieldStyle onChange={onChange} type={type} placeholder={placeholder} id={id} />
)

function Input({ onChange, type, placeholder, id, ...rest }) {
    return (
        <InputElement onChange={onChange} type={type} placeholder={placeholder} {...rest} className="testInput" id={id} />
    )
}

Input.defaultProps = {
    onChange: () => { },
    type: 'text',
    placeholder: 'Digite aqui seu texto',
}

Input.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.number
}

export default Input;