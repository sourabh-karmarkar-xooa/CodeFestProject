import {ON_LOGIN_SUCCESS} from '../constant';
import {createReducer} from "../util";

const initialState = {
    user: {
        id:1,
        name:'Yogesh Patel',
        photo:'https://specials-images.forbesimg.com/imageserve/5d3d7a55f1176b000897d627/960x0.jpg?fit=scale'
    }
};

export default createReducer(initialState, {

    [ON_LOGIN_SUCCESS]: (state, payload) =>
        Object.assign({}, state, {
            user: payload
        }),
});
