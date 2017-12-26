import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { mam } from "../../../img/mam.jpg";


const { height, width } = Dimensions.get('window');

const imgWidth = width - 40;
const imgHeight = (imgWidth / 1296) * 899 * 0.9;
const productWidth=(width-50)/2;
const productHeight=(productWidth*745)/556;

export default class List extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.textStyle}>List</Text>
        </View>
      </View>


    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    // height: height * 0.8,
    backgroundColor: '#f5fcff',
    margin: 10,
    borderRadius: 2,
    padding: 10,
    shadowColor: "#2e272b",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    flex: 1,
    // flexDirection: 'column'

  },
  textStyle: {
    fontSize: 20,
    color: "#Afafaf",
    // marginBottom: 20
  },
  textImg: {
    width: imgWidth,
    height: imgHeight,
    // position: 'absolute'
  },
  textName:{
    fontSize: 15,
    color: "#accaca",
  },
  textPrice:{
    fontSize: 15,
    color: "purple",
  }
});


