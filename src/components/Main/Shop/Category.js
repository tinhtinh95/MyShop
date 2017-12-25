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


export default class Category extends React.Component {
  render() {
    return (
      // <View></View>
      <View style={styles.wrapper}>
        <View style={{ flex: 1 }}><Text style={styles.textStyle}>Category</Text></View>
        <View style={{ flex: 4 }}>
          <Swiper>
            <TouchableOpacity onPress={()=> alert("hahihi")} style={{flex:1,position: 'absolute', }} >
              <View style={{ position: 'absolute' }}>
                <Image source={require('../../../img/mam.jpg')}
                  style={styles.textImg}>
                  {/* <Text>Ahihi</Text> */}
                </Image>

              </View>
              <View style={{
                   paddingHorizontal : 100,
                   paddingVertical : 90,
                }}>
                <Text style={{
                  fontSize: 20, color: 'black',
                }}>Shrimp sauce</Text></View>
            </TouchableOpacity>
            <Image source={require('../../../img/mam.jpg')}
              style={styles.textImg} />
            <Image source={require('../../../img/mam.jpg')}
              style={styles.textImg} />
          </Swiper>
        </View>
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');

const imgWidth = width - 40;
const imgHeight = (imgWidth / 1296) * 899 * 0.9;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.4,
    backgroundColor: '#f5fcff',
    margin: 10,
    borderRadius: 2,
    padding: 10,
       shadowColor:"#2e272b", 
       shadowOffset:{width:0, height:10}, 
       shadowOpacity:0.2

  },
  textStyle: {
    fontSize: 20,
    color: "#Afafaf",
  },
  textImg: {
    width: imgWidth,
    height: imgHeight,
    // position: 'absolute'
  }
});


