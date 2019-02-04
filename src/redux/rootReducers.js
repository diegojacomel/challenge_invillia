/* Modules */
import { combineReducers } from 'redux';

import peopleReducer from './people/reducer';
import typedReducer from './typed/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    peopleReducer: peopleReducer,
    typedReducer: typedReducer
})

export default rootReducers;