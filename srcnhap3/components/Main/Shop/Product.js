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

export default class Product extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.textStyle}>Product</Text>
        </View>
        <View style={{  flexDirection: 'row',
        
        justifyContent:'space-around', flexWrap:'wrap'
         }}>
          <View style={{width:productWidth, marginRight: 10,shadowColor: "#2e272b",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2, }}>
            <Image
            style={{width:productWidth, height:200}}
            source={require('../../../img/muc1.jpg')} />
            <Text style={styles.textName}>Product name</Text>
            <Text style={styles.textPrice}>3$</Text>
          </View>
          <View style={{width:productWidth, 
            justifyContent:'flex-end',
             }}>
            <Image
            style={{width:productWidth, height:200}}
            source={require('../../../img/muc1.jpg')} />
            <Text style={styles.textName}>Product name</Text>
            <Text style={styles.textPrice}>2$</Text>
          </View>
          <View style={{height:10,width}}/>
          <View style={{width:productWidth, 
            justifyContent:'flex-end',
             }}>
            <Image
            style={{width:productWidth, height:200}}
            source={require('../../../img/muc1.jpg')} />
            <Text style={styles.textName}>Product name</Text>
            <Text style={styles.textPrice}>2$</Text>
          </View>
          <View style={{width:productWidth, 
            justifyContent:'flex-end',
             }}>
            <Image
            style={{width:productWidth, height:200}}
            source={require('../../../img/muc1.jpg')} />
            <Text style={styles.textName}>Product name</Text>
            <Text style={styles.textPrice}>2$</Text>
          </View>
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
    // flex: 1,
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


