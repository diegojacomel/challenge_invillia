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
    &:disabled {
        background: ${props => props.theme.colors.gray};
        cursor: not-allowed;
    }
`

const InputElement = ({ onChange, type, placeholder, id, disabled, onKeyUp }) => (
    <FieldStyle onChange={onChange} type={type} placeholder={placeholder} id={id} disabled={disabled} onKeyUp={onKeyUp} />
)

function Input({ onChange, type, placeholder, id, disabled, onKeyUp, ...rest }) {
    return (
        <InputElement
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className="testInput"
            disabled={disabled}
            id={id}
            onKeyUp={onKeyUp}
            {...rest}
        />
    )
}

Input.defaultProps = {
    onChange: () => { },
    type: 'text',
    placeholder: 'Digite aqui seu texto',
    onKeyUp: () => { }
}

Input.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.number,
    onKeyUp: PropTypes.func
}

export default Input;