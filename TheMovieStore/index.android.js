/**
 * Sample React Native
 App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import SplashScreen from './src/SplashScreen';
import App from './src/App'
export default class TheMovieStore extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMove: false,
      timeNextScreen: 2000
    }
  }
  timmer() {
    setTimeout(() => {
      this.setState({
        isMove: true
      })
    }, this.state.timeNextScreen);
  }

  componentDidMount() {
    this.timmer();
  }
  render() {
    return (
      this.state.isMove ? <App /> : <SplashScreen />
    );
  }
}

AppRegistry.registerComponent('TheMovieStore', () => TheMovieStore);
