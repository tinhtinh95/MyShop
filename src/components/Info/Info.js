
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


class Ex extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.props.open} style={styles.welcome}>
          Welcome to React Native! 

        </Text>
       <Button  title="ahihi" onPress={this.props.open}/>
      </View>
    );
  }
}
export default class Info extends React.Component {

  // _onOpen=()=>{
  //   this.props.navigation.navigate('DrawerOpen')
  //   // alert("ahihi")
  // }

  render() {
    return (
      // <Ex open={this._onOpen} />
      <Ex/>
    );
  }
}

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
