import { getAllStates } from '../api/statesApi.js';
import actionTypes from './actionTypes.js';
import {getUser} from '../api/usersApi.js';

export const initializeData = () => {
    return (dispatch) => {
        return Promise.all([getAllStates(), getUser()]).then((res) => {
            dispatch({type:actionTypes.GET_ALL_STATES_SUCCSESFUL,states:res[0]});

            if(res[1]) {
                dispatch({type:actionTypes.LOGIN_USER_SUCCSESFUL,states:res[1]});
            }
            return res;
        });
    }
}