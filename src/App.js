import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {configureStore} from './store';
import {withRouter, Route} from "react-router";
import LandingRoute from './components/LandingRoute';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <LandingRoute />
        </Provider>
    );
}

export default withRouter(App);
