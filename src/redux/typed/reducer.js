import {
    TYPING_NAME
} from './types';

const INITIAL_STATE = {
    typed: []
}

const typedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPING_NAME.SUCCESS:
            return {
                ...state,
                typed: [
                    ...state.typed,
                    {
                        value: action.value,
                        descriptionUsed: action.descriptionUsed,
                        id: action.id
                    }
                ]
            }

        case TYPING_NAME.RESET:
            return {
                ...state,
                typed: []
            }

        default:
            return state

    }
}

export default typedReducer;