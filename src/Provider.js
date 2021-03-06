
import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import App from './App';
import store from './redux/configStore';
import {Provider} from 'react-redux';



export default class Main extends Component {
    componentWillMount() {
        StatusBar.setHidden(true);
      }
  render() {
      
      return (
          <Provider store={store}>
              <App/>
          </Provider>
      )
  }
}

