/** Modules */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

/** Router */
import { Link } from 'react-router-dom';

/** Components */
import Image from '../../components/Image/Image';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

/** Images */
import image from '../../images/image';

const Wrapper = styled.div`
    text-align: center;
`

const Spacing = styled.div`
    margin-top: ${props => props.theme.spacing.lg};
`

class Home extends Component {
    state = {};

    render() {
        const { props: { peopleReducer } } = this;
        console.log(peopleReducer)

        return (
            <Wrapper>
                <Image
                    src={image.darthVader}
                    alt="Star Wars Game"
                    title="Star Wars Game"
                    size="420px"
                    margin="50px 0 0"
                />
                <Title
                    color="grayDark"
                    fontSize="hhg"
                    alignCenter={true}
                    margin-top={true}
                >
                    StarQuiz!
                </Title>
                <Spacing>
                    <Link to="/game">
                        <Button
                            color="warning"
                            padding="hg"
                            bold={true}
                        >
                            JOGAR!
                        </Button>
                    </Link>
                </Spacing>
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