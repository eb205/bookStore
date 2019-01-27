import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {users} from '../reducers/usersReducer';
import {states} from '../reducers/statesReducer';

const rootReducer = combineReducers({
    users,
    states
});

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,  //async dispatch
        createLogger()
    )
);