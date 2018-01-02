
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, StatusBar, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import TabMain from '../Main/TabMain';
import Header from '../Main/Header/Header';


class StackMain extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header open={this.props.open}/>
        <TabMain />
      </View>
    )
  }
}

export default class Main extends React.Component {
  
    
    _onOpen = () => {
      this.props.navigation.navigate('DrawerOpen')
      // alert("ahihi")
    }
    render() {
      return (
        <StackMain open={this._onOpen} />
       
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

