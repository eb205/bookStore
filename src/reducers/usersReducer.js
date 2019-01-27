import actionTypes from '../actions/actionTypes.js';

const initialState = {currentUser:{name:"user", pic:""}};

export const users= (state=initialState,action) => {
    switch(action.type) {
        case actionTypes.LOGIN_USER_SUCCSESFUL: {
            return Object.assign({},{currentUser:action.user})
        }
        default:
            return state;
    }
}