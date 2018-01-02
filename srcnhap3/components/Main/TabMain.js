
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, StatusBar, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/actions';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Cart from '../Main/Cart/Cart';
import Search from '../Main/Search/Search';
import Contact from '../Main/Contact/Contact';
import Shop from '../Main/Shop/Shop';

const TabItem=TabNavigator({
  Home:{screen: Shop},
  Cart: {screen: Cart},
  Search:{screen: Search},
  Contact:{screen:Contact}
},
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
})


export default class TabMain extends React.Component {
  componentWillMount() {
    StatusBar.setHidden(true);
  }
  render() {
    console.log(this.props.data);
    return (
      <TabItem/>
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

