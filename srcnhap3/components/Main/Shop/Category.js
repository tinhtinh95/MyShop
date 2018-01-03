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
import { fetchData } from '../../../actions/actions';

const url = 'http://localhost/api/images/type/';

class Category extends React.Component {

  componentDidMount() {
    this.props.fetchData('type');
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
            {this.props.listCat.map(e => (
              <TouchableOpacity key={e.id} onPress={this.props.gotoList}
              >
                <View style={{ position: 'absolute' }}>
                  <Image source={{ uri: `${url}${e.image}` }}
                    style={styles.textImg}>
                  </Image>

                </View>
                <View style={styles.text}>
                  <Text style={{
                    fontSize: 20, color: 'black',
                  }}>{e.name}</Text>
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
    listCat: state.listCat,
  }
}
export default connect(mapStateToProps, { fetchData })(Category);

const { height, width } = Dimensions.get('window');

const imgWidth = width - 40;
const imgHeight = (imgWidth / 1296) * 950;

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
  },
  text: {
    paddingHorizontal: 100,
    paddingVertical: 90,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


