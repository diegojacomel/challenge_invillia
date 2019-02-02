import {
    FETCH_PEOPLE
} from './types';

const INITIAL_STATE = {
    people: [],
    error: ''
}

const peopleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PEOPLE.REQUEST:
            return {
                ...state,
                people: [],
                error: ''
            }

        case FETCH_PEOPLE.SUCCESS:
            return {
                ...state,
                people: action.people,
                error: ''
            }

        case FETCH_PEOPLE.FAILURE:
            return {
                ...state,
                people: [],
                error: action.peopleError
            }
        
        case FETCH_PEOPLE.RESET:
            return {
                ...state,
                people: [],
                error: ''
            }

        default:
            return state

    }
}

export default peopleReducer;