import {ON_LOGIN_SUCCESS} from '../constant';
import {createReducer} from "../util";

const initialState = {
    user:null
};

export default createReducer(initialState, {

    [ON_LOGIN_SUCCESS]: (state, payload) =>
        Object.assign({}, state, {
            user: payload
        }),
});
