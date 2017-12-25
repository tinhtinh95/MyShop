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


export default class Product extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.textStyle}>Product</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 10 }}>
          <View style={{ flex: 1, backgroundColor: 'yellow', marginRight: 10 }}>
            {/* <Image source={require('')} /> */}
          </View>

          <View style={{ flex: 1, backgroundColor: 'red' }}>

          </View>
        </View>
        {/* <View style={{flex:1,flexDirection:'row'}}>
          <View style={{ flex: 1, backgroundColor: 'yellow',marginRight:10  }}>

          </View>

          <View style={{ flex: 1, backgroundColor: 'red' }}>

          </View>
        </View> */}

      </View>


    );
  }
}


const { height, width } = Dimensions.get('window');

const imgWidth = width - 40;
const imgHeight = (imgWidth / 1296) * 899 * 0.9;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.8,
    backgroundColor: '#f5fcff',
    margin: 10,
    borderRadius: 2,
    padding: 10,
    shadowColor: "#2e272b",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    flex: 1,
    flexDirection: 'column'

  },
  textStyle: {
    fontSize: 20,
    color: "#Afafaf",
    marginBottom: 20
  },
  textImg: {
    width: imgWidth,
    height: imgHeight,
    // position: 'absolute'
  }
});


