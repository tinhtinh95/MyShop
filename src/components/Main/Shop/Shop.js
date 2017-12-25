

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Category from './Category';
import Product from './Product';

export default class Shop extends React.Component{
  static navigationOptions={
    // tabBarLabel:"ahihi",
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../ic_menu.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Category/> 
        <Product/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cacaca',
  },


});
