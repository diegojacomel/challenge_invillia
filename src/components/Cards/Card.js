/** Modules */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Components */
import Button from '../Button/Button';
import Image from '../Image/Image';
import Input from '../Input/Input';

const CardStyle = styled.div`
    flex-basis: calc(${props => props.theme.spacing.quarter} - ${props => props.theme.spacing.gt});
    margin-left: ${props => props.theme.spacing.ssm};
    margin-bottom: ${props => props.theme.spacing.xg};
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: ${props => props.theme.rounded.md};
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg};
    &:nth-child(4n + 1) {
        margin-left: ${props => props.theme.spacing.none};
    } 
`

const CardElement = ({ children }) => (
    <CardStyle>
        {children}
    </CardStyle>
)

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & > button {
        margin: ${props => props.theme.spacing.none} ${props => props.theme.spacing.xs};
    }
`

function Card({ image, typedName, inputId, showDescription, onChange }) {
    const [showInput, setShowInput] = useState(false);

    const onShowInput = () => {
        setShowInput(true)
    }

    return (
        <CardElement>
            <Image src={image} alt="Descubra o personagem" title="Descubra o personagem" />
            <ButtonWrapper>
                <Button onClick={() => onShowInput()}>?</Button>
                <Button onClick={showDescription}>...</Button>
            </ButtonWrapper>
            {showInput
                ?
                <Input value={typedName} onChange={onChange} placeholder="Digite o nome do personagem" id={inputId} />
                :
                null
            }
        </CardElement>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    typedName: PropTypes.string,
    inputId: PropTypes.number,
    showDescription: PropTypes.func,
    onChange: PropTypes.func
}

Card.defaultProps = {
    image: "#",
    typedName: "",
    showDescription: () => { },
    onChange: () => { }
}

function mapStateToProps(state) {
    return {
        peopleReducer: state.peopleReducer
    }
}

export default connect(mapStateToProps)(Card);