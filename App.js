import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentDidMount() {
    const config = {
    apiKey: 'AIzaSyBtrlX6kLW1YLJIAh2yts6Btz6J1R1rbi4',
    authDomain: 'gpstcc-b532c.firebaseapp.com',
    databaseURL: 'https://gpstcc-b532c.firebaseio.com',
    projectId: 'gpstcc-b532c',
    storageBucket: 'gpstcc-b532c.appspot.com',
    messagingSenderId: '346578448856'
  };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
