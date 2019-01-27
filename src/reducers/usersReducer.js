import actionTypes from '../actions/actionTypes.js';

const initialState = {currentUser:{name:"user"}, isLoggedOn:false};

export const users= (state=initialState,action) => {
    switch(action.type) {
        case actionTypes.LOGIN_USER_SUCCSESFUL: {
            return Object.assign({},state,{currentUser:action.user}, {isLoggedOn:true});
        }
        case actionTypes.LOGOUT_USER: {
            return Object.assign({},state,initialState);
        }
        default:
            return state;
    }
}