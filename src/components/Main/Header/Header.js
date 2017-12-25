
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Dimensions, TouchableOpacity, Image, TextInput, StatusBar
} from 'react-native';

// StatusBar.setHidden(true)
const { height, width } = Dimensions.get('window');

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.top}>
          <TouchableOpacity
            onPress={this.props.open}
          >
            <Image style={styles.imgStyle} source={require('../../../media/appIcon/ic_menu.png')} />
          </TouchableOpacity>
          <Text style={styles.textStyle}>Danang specialty</Text>
          <TouchableOpacity>
            <Image style={styles.imgStyle} source={require('../../../media/appIcon/ic_menu.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TextInput placeholder="What do you want to buy?" style={styles.inputStyle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#34B080",
    height: height / 7,
    flexDirection: 'column',
    padding: 10,
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottom: {
    flex: 1
  },
  imgStyle: {
    width: 20,
    height: 20
  },
  inputStyle: {
    paddingLeft: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 5,
    height: 40,
    fontSize: 15
  },
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    justifyContent: 'flex-end'
  }
});

