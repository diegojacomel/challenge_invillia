/* Modules */
import { combineReducers } from 'redux';

import peopleReducer from './people/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    peopleReducer: peopleReducer,
})

export default rootReducers;