import React from 'react';
import {render} from 'react-dom';
import { GlobalStyles } from './globalStyles/GlobalStyles.styles';
import App from './App';
import { Provider } from 'react-redux';
import { FirebaseContext } from './context/firebase';
import configureStore from './store/configureStore';
import 'normalize.css';
import './index.scss';
import firebase from './lib/firebase.prod';

const store = configureStore();

render(
  <Provider store={store}>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
);
