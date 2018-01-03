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
  TouchableOpacity,
  FlatList
} from 'react-native';
// import { mam } from "../../../img/mam.jpg";


const { height, width } = Dimensions.get('window');

const imgWidth = width / 2;
const imgHeight = (imgWidth / 225) * 225;
const productWidth = (width - 50) / 2;
const productHeight = (productWidth * 745) / 556;

class ListItem extends React.Component {
  render() {
    return (
      <View>
        <View><Image source={require('../../../img/mam1.jpg')} /></View>
        <View>
          <Text>Name</Text>
          <Text>Price</Text>
          <Text>Detail</Text>
        </View>
      </View>
    )
  }
}

export default class List extends React.Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <ScrollView style={styles.wrapper}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => goBack()}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require('../../../media/appIcon/backList.png')}
            />
          </TouchableOpacity>
          <Text style={styles.textStyle}>List</Text>
        </View>
        <View>
          {/* <FlatList
          data={[
            {key:'a'},{key:'b'}
          ]}
          renderItem={({item})=><Text>{item.key}</Text>}
          // keyExtractor={({item,index})=>index}
          ></FlatList> */}
          <View style={{
            paddingTop: 10,
            paddingBottom: 10,
            flexDirection: 'row',
            borderTopWidth: 1
          }}>
            <View><Image
              style={{
                width: imgWidth, height: imgHeight
              }}
              source={require('../../../img/mam1.jpg')} /></View>
            <View style={{ marginLeft: width / 8, justifyContent: 'flex-end' }}>
              <Text style={{
                fontSize: 20,
                color: 'black'
              }}>Name</Text>
              <View style={{ flexDirection: 'row', }}><Text style={{ color: 'black' }}>Price:</Text><Text
                style={{
                  color: 'purple'
                }}>$4</Text></View>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detail')}><Text style={{
                color: 'blue'
              }}>Detail</Text></TouchableOpacity>
            </View>
          </View>

          <View style={{
            paddingTop: 10,
            paddingBottom: 10,
            flexDirection: 'row',
            borderTopWidth: 1
          }}>
            <View><Image
              style={{
                width: imgWidth, height: imgHeight
              }}
              source={require('../../../img/mam1.jpg')} /></View>
            <View style={{ marginLeft: width / 8, justifyContent: 'flex-end' }}>
              <Text style={{
                fontSize: 20,
                color: 'black'
              }}>Name</Text>
              <View style={{ flexDirection: 'row', }}><Text style={{ color: 'black' }}>Price:</Text><Text
                style={{
                  color: 'purple'
                }}>$4</Text></View>
              <Text style={{
                color: 'blue'
              }}>Detail</Text>
            </View>
          </View>

        </View>
      </ScrollView>


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
    marginLeft: width / 3,
    // marginBottom: 20
  },
  textImg: {
    width: imgWidth,
    height: imgHeight,
    // position: 'absolute'
  },
  textName: {
    fontSize: 15,
    color: "#accaca",
  },
  textPrice: {
    fontSize: 15,
    color: "purple",
  }
});


