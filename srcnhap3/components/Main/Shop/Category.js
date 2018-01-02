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
  TouchableOpacity, FlatList, Button
} from 'react-native';
import { mam } from "../../../img/mam.jpg";
import { connect } from 'react-redux';
import {fetchData} from '../../../actions/actions';


class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.arrCat,
    }
  }
  componentWillMount() {
    this.props.fetchData();
  }
  render() {
    return (
      // <View></View>
      <View style={styles.wrapper}>
        <View style={{ flex: 1 }}><Text style={styles.textStyle}>Category</Text></View>
        <View style={{ flex: 4 }}>
          {/* <FlatList
            data={this.props.arrCat}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <Text>{item.id}</Text>}
          >

          </FlatList> */}
          <Swiper>
            {this.props.arrCat.map(e=>(
            <TouchableOpacity key={e.id} onPress={this.props.gotoList} style={{flex:1,position: 'absolute', }} >
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
                }}>Shrimp sauce</Text>
                </View>
            </TouchableOpacity>
             ))} 
          </Swiper>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    arrCat: state.listCat,
  }
}
export default connect(mapStateToProps,{fetchData})(Category);

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
    shadowColor: "#2e272b",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2

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


