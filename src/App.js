
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, StatusBar
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Auth from './components/Auth/Auth';
import Info from './components/Info/Info';
import Main from './components/Main/Main';
import OrderHistory from './components/OrderHistory/OrderHistory';

const DrawerMain=DrawerNavigator({
  Home:{screen: Main},
  // Info:{screen: Info},
  // OrderHistory:{screen: OrderHistory},
  Auth:{screen: Auth},
  
},
// {
//     // backgroundColor: '#34B080'
 
// }
)

export default class App extends React.Component {
  componentWillMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <View style={{flex:1,}}>
        <DrawerMain/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

