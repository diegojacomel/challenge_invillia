/** Modules */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';

/** Components */
import Image from '../../components/Image/Image';
import Title from '../../components/Title/Title';
import Timer from '../../components/Timer/Timer';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CardWrapper from '../../components/Cards/CardsWrapper';
import Card from '../../components/Cards/Card';

/** Images */
import image from '../../images/image';

/** Types */
import { FETCH_PEOPLE } from '../../redux/people/types';
import { TYPING_NAME } from '../../redux/typed/types';

const GameStyle = styled.div`
    display: block;
    width: calc(${props => props.theme.spacing.full}) - 30px;
    padding: 0 15px;
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${props => props.theme.spacing.ssm};
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
`

const ModalWrapper = styled.div`
    margin-top: ${props => props.theme.spacing.lg};
`

const Description = styled.div`
    max-width: ${props => props.theme.spacing.full};
    width: ${props => props.theme.spacing.hhg};
`

const Paragraph = styled.p`
    margin: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.none} ${props => props.theme.spacing.none};;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${props => props.theme.spacing.lg};
`

const ScoreWrapper = styled.div`
    font-size: ${props => props.theme.fontSize.hg};
    font-weight: bold;
    text-align: center;
    margin: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.none} ${props => props.theme.spacing.lg};
`

const CustomLink = styled(Link)`
    display: block;
    text-align: center;
`

const Label = styled.label`
    display: block;
    width: ${props => props.theme.spacing.full};
    font-size: ${props => props.theme.fontSize.xs};
`

class Game extends Component {
    state = {
        openModal: false,
        currentPage: 0,
        disableInput: [],
        descriptionUsed: false,
        score: 0,
        modalScore: false,
        textTyped: {},
        listScore: {},
        arrayScore: []
    }

    componentDidMount() {
        this.fetchPeople();
    }

    fetchPeople = () => {
        const { state, props: { dispatch } } = this;

        this.setState({
            currentPage: state.currentPage + 1
        }, () => {
            dispatch({
                type: FETCH_PEOPLE.REQUEST,
                page: state.currentPage + 1
            })
        })
    }

    fetchLessPeople = () => {
        const { state, props: { dispatch } } = this;

        this.setState({
            currentPage: state.currentPage - 1
        }, () => {
            dispatch({
                type: FETCH_PEOPLE.REQUEST,
                page: state.currentPage - 1
            })
        })
    }

    onCloseModal = () => {
        this.setState({
            openModal: false
        })
    }

    handleKeyUp = (id, value, e) => {
        const { state, props: { dispatch } } = this;

        if (+e.target.id === +id && e.keyCode === 13) {
            document.getElementById(id).disabled = true;

            this.setState({
                descriptionUsed: false
            }, () => {
                dispatch({
                    type: TYPING_NAME.SUCCESS,
                    id,
                    value,
                    descriptionUsed: state.descriptionUsed
                })
            })
        }
    }

    resetStatus = () => {
        const { props: { dispatch } } = this;

        dispatch({
            type: TYPING_NAME.RESET,
        })
    }

    onShowDescription = (person) => {
        this.setState({
            openModal: true,
            descriptionUsed: true,
            person
        })
    }

    sumScore = () => {
        const { state, props: { typedReducer, peopleReducer } } = this;
        const typedReduc = typedReducer.typed;
        const results = peopleReducer && peopleReducer.allPeople;
        let arr = [];
        let score = 0;

        if (results && results.length) {
            results.forEach(person => {
                const correct = typedReduc.filter(x => x.value.toLowerCase() === person.name.toLowerCase())[0];

                arr.push(correct)
            })
        }
        
        if (arr && arr.length) {
            arr.forEach(right => {
                if (!!right && !!right.value) {
                    if (!!right.descriptionUsed) {
                        score += 5
                    } else {
                        score += 10
                    }
                }
            })
        }

        if (!state.modalScore) {
            this.setState({
                score,
                modalScore: true
            })
        }
    }

    setPerson = (value, type) => {
        const { state } = this;

        if (type === "name") {
            this.setState({
                listScore: {
                    ...state.listScore,
                    [type]: value,
                    score: state.score
                }
            })
        } else if (type === "email") {
            this.setState({
                listScore: {
                    ...state.listScore,
                    [type]: value,
                    score: state.score
                }
            })
        }
    }

    registerPerson = () => {
        const { state } = this;
        let listRanking = window.localStorage.getItem('listRanking') ? JSON.parse(window.localStorage.getItem('listRanking')) : [];
        const individualRanking = state.listScore;
        
        listRanking.push(individualRanking)

        if (!!listRanking && listRanking.length) {
            window.localStorage.setItem('listRanking', JSON.stringify(listRanking));
        }
    }

    render() {
        const { state, props: { peopleReducer } } = this;
        const results = peopleReducer && peopleReducer.people && peopleReducer.people.data && peopleReducer.people.data.results;

        return (
            <GameStyle>
                <HeaderWrapper>
                    <TitleWrapper>
                        <Image src={image.darthVader} size="80px" margin="0 15px 0 0" />
                        <Title color="grayDark" fontSize="hhg">
                            StarQuiz!
                        </Title>
                    </TitleWrapper>
                    <Timer endTime={() => this.sumScore()} />
                </HeaderWrapper>
                <CardWrapper>
                    {!!results && results.length
                        ?
                        results.map((person, index) => {
                            const characterId = person.url.split('/')
                            return (
                                <Card
                                    key={index}
                                    image={image[`img${characterId[5]}`]}
                                    inputId={+characterId[5]}
                                    showDescription={() => this.onShowDescription(person)}
                                    arrayDisable={state.disableInput}
                                    onKeyUp={(e) => this.handleKeyUp(characterId[5], e.target.value, e)}
                                />
                            )
                        })
                        :
                        null
                    }
                </CardWrapper>
                <ButtonWrapper>
                    {state.currentPage > 1
                        ?
                        <Button onClick={() => this.fetchLessPeople()}>Anterior</Button>
                        :
                        <div></div>
                    }
                    {state.currentPage < 9
                        ?
                        <Button onClick={() => this.fetchPeople()}>Próximo</Button>
                        :
                        <div></div>
                    }
                </ButtonWrapper>
                <Modal open={state.openModal} onClose={this.onCloseModal} center>
                    <ModalWrapper>
                        {state.person
                            ?
                            <Description>
                                <Title>Description</Title>
                                <Paragraph>
                                    Height: <strong>{state.person.height}</strong>
                                </Paragraph>
                                <Paragraph>
                                    Mass: <strong>{state.person.mass}</strong>
                                </Paragraph>
                                <Paragraph>
                                    Hair color: <strong>{state.person.hair_color}</strong>
                                </Paragraph>
                                <Paragraph>
                                    Skin color: <strong>{state.person.skin_color}</strong>
                                </Paragraph>
                                <Paragraph>
                                    Eye color: <strong>{state.person.eye_color}</strong>
                                </Paragraph>
                                <Paragraph>
                                    Birth year: <strong>{state.person.birth_year}</strong>
                                </Paragraph>
                            </Description>
                            :
                            null
                        }
                    </ModalWrapper>
                </Modal>
                <Modal open={state.modalScore} onClose={() => {}} showCloseIcon={false} center>
                    <ModalWrapper>
                        <Title alignCenter>Quiz finalizado!</Title>
                        <ScoreWrapper>
                            {state.score} pontos
                        </ScoreWrapper>
                        <Paragraph>
                            Preencha o form abaixo para salvar sua pontuação:
                        </Paragraph>
                        <Paragraph>
                            <Label>
                                Nome
                            </Label>
                            <Input 
                                onChange={(e) => this.setPerson(e.target.value, "name")}
                                type="text"
                                placeholder="Digite seu nome"
                            />
                        </Paragraph>
                        <Paragraph>
                            <Label>
                                E-mail
                            </Label>
                            <Input
                                onChange={(e) => this.setPerson(e.target.value, "email")}
                                type="email"
                                placeholder="Digite seu e-mail"
                            />
                        </Paragraph>
                        <Paragraph style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
                            <CustomLink to="/">
                                <Button color="warning" marginTop={true} padding="lg" onClick={() => this.resetStatus()}>
                                    Jogar novamente
                                </Button>
                            </CustomLink>
                            <CustomLink to="/ranking">
                                <Button disabled={!state.listScore.email || !state.listScore.name} onClick={() => this.registerPerson()}>
                                    Salvar
                                </Button>
                            </CustomLink>
                        </Paragraph>
                    </ModalWrapper>
                </Modal>
            </GameStyle>
        )
    }
}

function mapStateToProps(state) {
    return {
        peopleReducer: state.peopleReducer,
        typedReducer: state.typedReducer
    }
}

export default connect(mapStateToProps)(Game);