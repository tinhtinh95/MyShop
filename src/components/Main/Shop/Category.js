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
  TouchableOpacity,FlatList
} from 'react-native';
import { mam } from "../../../img/mam.jpg";
import {connect} from 'react-redux';


class Category extends React.Component {
  constructor(props){
    super(props);
    this.state={
        data:[],
    }
  }
  // componentDidMount(){
  //   fetch('http://localhost/api/')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     this.setState({data: responseJson.type});
  //   })
  //   .catch((error) => {
  //       console.error(error);
  //   });
  // }
  render() {
    // const listCat=this.props.arrCat;
    const {isSignIn,arrCat}=this.props;
    // alert(arrCat);
    // alert(isSignIn);
    // alert(`state send to task list =${JSON.stringify(arrCat)} `);
    // alert(arrCat);
    // console.log(arrCat.id)
    return (
      // <View></View>
      <View style={styles.wrapper}>
        <View style={{ flex: 1 }}><Text style={styles.textStyle}>Category</Text></View>
        <View style={{ flex: 4 }}>
        <FlatList
        data={arrCat}
        keyExtractor={(item, index)=>index}
        renderItem={({item})=><Text>{item.id}</Text>}
        >

        </FlatList>
          <Swiper>
            {/* {arrCat.map(e=>( */}
            <TouchableOpacity onPress={this.props.gotoList} style={{flex:1,position: 'absolute', }} >
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
            {/* ))} */}
          </Swiper>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    arrCat: state.arrCat,
    isSignIn:state.isSignIn,
  }
}
export default connect(mapStateToProps)(Category);

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


