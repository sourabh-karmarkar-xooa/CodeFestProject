import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from '../reducer';

export  function configureStore(preloadedState) {
    const middleWares = [logger, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middleWares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = compose(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    return store;
}
