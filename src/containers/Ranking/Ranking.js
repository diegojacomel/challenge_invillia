/** Modules */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

/** Components */
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

/** Types */
import { TYPING_NAME } from '../../redux/typed/types';

const Wrapper = styled.div`
    display: block;
    padding: ${props => props.theme.spacing.ssm};
`

const Table = styled.table`
    width: ${props => props.theme.spacing.full};
    margin-top: ${props => props.theme.spacing.lg};
    margin-bottom: ${props => props.theme.spacing.lg};
`

const Tr = styled.tr`
    &:odd {
        background: #f5f5f5;
    }
`

const Th = styled.th`
    width: 33.33%;
    border: 1px solid ${props => props.theme.colors.gray};
    padding: ${props => props.theme.spacing.ssm};
`

const Td = styled.td`
    width: 33.33%;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
    border-left: 1px solid ${props => props.theme.colors.gray};
    border-right: 1px solid ${props => props.theme.colors.gray};
    padding: ${props => props.theme.spacing.ssm};
`


class Ranking extends Component {
    state = {
        listRanking: []
    }

    componentDidMount() {
        const listRanking = JSON.parse(window.localStorage.getItem('listRanking'));

        this.setState({
            listRanking
        })
    }

    resetStatus = () => {
        const { props: { dispatch } } = this;

        dispatch({
            type: TYPING_NAME.RESET,
        })
    }

    renderRanking = () => {
        const { state } = this;

        return (
            <Table cellSpacing={0}>
                <thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th>E-mail</Th>
                        <Th>Pontuação</Th>
                    </Tr>
                </thead>
                <tbody>
                {state.listRanking
                    ?
                    state.listRanking.map((place, index) => (
                        <Tr key={index}>
                            <Td>{place.name}</Td>
                            <Td>{place.email}</Td>
                            <Td>{place.score}</Td>
                        </Tr>
                    ))
                    :
                    null
                }
                </tbody>
            </Table>
        )
    }

    render() {
        return (
            <Wrapper>
                <Title alignCenter>
                    Ranking
                </Title>
                {this.renderRanking()}
                <Link to="/game">
                    <Button color="warning" onClick={this.resetStatus}>
                        Jogar novamente
                    </Button>
                </Link>
            </Wrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        typedReducer: state.typedReducer
    }    
}

export default connect(mapStateToProps)(Ranking);