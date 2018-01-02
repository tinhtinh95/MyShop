
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, StatusBar
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Auth from './Auth/Auth';
import Info from './Info/Info';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';

// import {connect} from 'react-redux';

const DrawerItem=DrawerNavigator({
  Home:{screen: Main},
  Info:{screen: Info},
  OrderHistory:{screen: OrderHistory},
  Auth:{screen: Auth},
  
}
)

export default class DrawerMain extends React.Component {
  render() {
    return (
      <View style={{flex:1,}}>
        <DrawerItem/>
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

