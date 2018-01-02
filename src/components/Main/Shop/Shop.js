

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
import { StackNavigator } from 'react-navigation';
import List from './ListProduct';
import Detail from './Detail';

class Shop extends React.Component {
  // static navigationOptions={
  //   // tabBarLabel:"ahihi",
  //   // tabBarIcon: ({ tintColor }) => (
  //   //   <Image
  //   //     source={require('../ic_menu.png')}
  //   //     style={[styles.icon, {tintColor: tintColor}]}
  //   //   />
  //   // ),
  // }
  _gotoList = () => {
    this.props.navigation.navigate('ListProduct')
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text onPress={this._gotoList}>ahh</Text>
        {/* <Category gotoList={this._gotoList} /> */}
        <Product />
      </ScrollView> 
    );
  }
}


const StackNav = StackNavigator({
  Home: { screen: Shop },
  ListProduct: { screen: List },
  Detail: { screen: Detail },
}, {
    navigationOptions: {
      header: null,
    }
  })




export default StackNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cacaca',
  },


});
