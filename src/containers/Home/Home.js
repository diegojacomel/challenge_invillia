/** Modules */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

/** Types */
import { FETCH_PEOPLE } from '../../redux/people/types';

const Wrapper = styled.div`
    display: block;
    text-align: left;
`

class Home extends Component {
    state = {};

    componentDidMount() {
        const { props: { dispatch } } = this;

        dispatch({
            type: FETCH_PEOPLE.REQUEST
        })
    }
    
    render() {
        const { props: { peopleReducer } } = this;
        console.log(peopleReducer)

        return (
            <Wrapper>
                Home
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        peopleReducer: state.peopleReducer
    }
}

export default connect(mapStateToProps)(Home);