
import React, { Component } from 'react';
import App from './App';
import store from './redux/store';
import {Provider} from 'react-redux';



export default class Main extends Component {
  render() {
      return (
          <Provider store={store}>
              <App/>
          </Provider>
      )
  }
}
