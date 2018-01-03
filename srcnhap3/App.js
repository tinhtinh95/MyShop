
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, StausBar
} from 'react-native';
import DrawerMain from './components/DrawerMain';
import {Provider} from 'react-redux';
import store from './configStore';

export default class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <DrawerMain/>
             </Provider>
        )
    }
}




