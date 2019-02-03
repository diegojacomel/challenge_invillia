/** Modules */
import React, { Component } from 'react';
import styled from 'styled-components';

const GameStyle = styled.div`
    display: block;
    width: calc(${props => props.theme.spacing.full}) - 30px;
    padding: 0 15px;
`

class Game extends Component {
    state = {}

    render() {
        return (
            <GameStyle>
                Game
            </GameStyle>
        )
    }
}

export default Game;