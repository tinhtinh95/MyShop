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
import {connect} from 'react-redux';
import {fetchData} from '../../../actions/actions';


const { height, width } = Dimensions.get('window');

const imgWidth = width - 40;
const imgHeight = (imgWidth / 1296) * 899 * 0.9;
const productWidth = (width - 50) / 2;
const productHeight = (productWidth * 745) / 556;

class Product extends React.Component {
  componentDidMount(){
    this.props.fetchData('product');
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.textStyle}>Product</Text>
        </View>
        <View style={styles.wrapperItems}>
          {this.props.listProduct.map(e => (
            <View key={e.id} style={styles.wrapperItem}>
              <Image
                style={{ width: productWidth, height: 200 }}
                source={require('../../../img/muc1.jpg')} />
              <Text style={styles.textName}>{e.name}</Text>
              <Text style={styles.textPrice}>{e.price}$</Text>
            </View>
          ))}
        </View>
      </View>


    );
  }
}
function mapStateToProps(state) {
  return {
    listProduct: state.listProduct,
  }
}
export default connect(mapStateToProps,{fetchData})(Product);


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
  textName: {
    fontSize: 15,
    color: "#accaca",
  },
  textPrice: {
    fontSize: 15,
    color: "purple",
  },
  wrapperItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  wrapperItem: {
    width: productWidth,
    justifyContent: 'flex-end',
    shadowColor: "#2e272b",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
  }
});


