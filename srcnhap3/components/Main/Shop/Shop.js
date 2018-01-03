

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
import List from './ListProductByCat';
import Detail from './Detail';

class Shop extends React.Component {

  _gotoList = () => {
    this.props.navigation.navigate('ListProductByCat')
  }
  _gotoDetail = (product) => {
    this.props.navigation.navigate('Detail',{product})
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Category gotoList={this._gotoList} />
        <Product gotoDetail={this._gotoDetail} />
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
