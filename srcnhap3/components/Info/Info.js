
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';


const { width } = Dimensions.get('window');
export default class Info extends React.Component {
  render() {
    const SignIn = (
      <View style={styles.form}>
        <TextInput style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your username' />
        <TextInput style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your password' />
        <TouchableOpacity style={styles.btnSubmit}><Text style={styles.boldText}>Submit</Text></TouchableOpacity>
      </View>
    )
    const SignUp = (
      <View style={styles.form}>
        <TextInput style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your email' />
        <TextInput style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your username' />
        <TextInput style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your password' />
        <TextInput style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Re-enter your password' />
        <TouchableOpacity style={styles.btnSubmit}><Text style={styles.boldText}>Submit</Text></TouchableOpacity>
      </View>
    )

    return (
      <View style={styles.container}>
        {/* <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={require('../../img/auth.jpg')}
          />
        </View> */}
        <View style={styles.header}>
          <TouchableOpacity style={{padding:10}} onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
            <Image style={styles.backHeader} source={require('../../media/appIcon/back_white.png')} />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>Your profile</Text>
        </View>
        <View style={styles.form}>
        <TextInput underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your username' />
        <TextInput underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your password' />
        <TouchableOpacity style={styles.btnSubmit}><Text style={styles.boldText}>Update</Text></TouchableOpacity>
      </View>
        
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cacaca',
    // alignItems:'center',
    // justifyContent: 'space-between',
  },
  inputStyle: {
    borderWidth: 1,
    height: 40,
    width: width * 0.8,
    // fontWeight: 'bold',
    // color: 'black',
    marginBottom: 10,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: '#fff',

  },
  imgContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  imgStyle: {
    flex: 1,
    width: null,
    height: null,
  },
  header: {
    flexDirection: 'row',
    backgroundColor:'#34B080'
  },
  backHeader: {
    width: 35, height: 35,
    paddingTop:10
  },
  titleHeader: {
    color: 'black',
    padding: 10,
    marginLeft: width / 6,
    fontFamily: 'Arial',
    fontSize: 30
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
   marginTop:width/3
  },
  btnSubmit: {
    backgroundColor: '#00FFCC',
    width: width * 0.8,
    alignItems: 'center',
    borderWidth: 1, height: 40,
    justifyContent: 'center',
    borderRadius: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  btnChosenLeft: {
    backgroundColor: '#00FFCC',
    width: width * 0.4,
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  btnChosenRight: {
    backgroundColor: '#00FFCC',
    width: width * 0.4,
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  
  btnNotChosenRight: {
    backgroundColor: '#CCFFFF',
    width: width * 0.4,
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  btnNotChosenLeft: {
    backgroundColor: '#CCFFFF',
    width: width * 0.4,
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  }
});
