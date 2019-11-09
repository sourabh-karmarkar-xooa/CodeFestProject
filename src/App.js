import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import {configureStore} from './store';
import MainComponent from './components/MainComponent';

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <MainComponent/>
      </Provider>
  );
}

export default App;
