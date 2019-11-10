import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import {configureStore} from './store';
import { withRouter,Route } from "react-router";
import MainComponent from './components/MainComponent';
import LoginComponent from './components/LoginComponent'

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
      <Route path="/" exact component={LoginComponent} />
      <Route path="/login"  component={LoginComponent} />
      <Route path="/stationery" component={MainComponent}/>
      </Provider>
  );
}

export default withRouter(App);
