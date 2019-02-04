/** Modules */
import React from 'react';
import styled from 'styled-components';

const CardWrapperStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    flex-wrap: wrap;
    margin-top: ${props => props.theme.spacing.xg};
`

const CardWrapperElement = ({ children }) => (
    <CardWrapperStyle>
        {children}
    </CardWrapperStyle>
)

function CardWrapper({ children }) {
    return (
        <CardWrapperElement id="testCardWrapper">
            {children}
        </CardWrapperElement>
    )
}

export default CardWrapper;
