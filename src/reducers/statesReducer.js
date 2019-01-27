import actionTypes from '../actions/actionTypes.js';

const initialState = {states:[]};

export const states= (state=initialState,action) => {
    switch(action.type) {
        case actionTypes.GET_ALL_STATES_SUCCSESFUL: {
            return Object.assign({},{states:action.states});
        }
        default:
            return state;
    }
}