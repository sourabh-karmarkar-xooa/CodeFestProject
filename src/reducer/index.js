import { combineReducers } from "redux";
import stationery from './stationery';
import auth from './auth';

const rootReducer = combineReducers({
    stationery,
    auth
});

export default rootReducer;
