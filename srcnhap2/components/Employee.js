
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, StatusBar, TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../actions';

class Employee extends React.Component {
  render() {
      console.log(this.props.data);
    return (
      <View style={{flex:1,}}>
        <TouchableOpacity  onPress={()=>this.props.fetchData()}>
        <Text
        >Click me</Text>
        </TouchableOpacity>
        <View>
            {
                this.props.data.isFetching === false && <Text>...Loading</Text>
                }
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    data:state.arrCat,
  }
}
export default connect(mapStateToProps,{fetchData})(Employee);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

