
import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import App from './App';
import configStore from './redux/configStore';
import {Provider,connect} from 'react-redux';



export default class Main extends Component {
    componentWillMount() {
        StatusBar.setHidden(true);
      }
  render() {
      
      return (
          <Provider store={configStore}>
              <App/>
          </Provider>
      )
  }
}

