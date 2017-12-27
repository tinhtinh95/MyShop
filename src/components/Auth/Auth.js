
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
import {connect} from 'react-redux';


const { width } = Dimensions.get('window');
class Auth extends React.Component {
  render() {
    
    const SignIn = (
      <View style={styles.form}>
        <TextInput underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your username' />
        <TextInput underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your password' />
        <TouchableOpacity style={styles.btnSubmit}><Text style={styles.boldText}>Submit</Text></TouchableOpacity>
      </View>
    )
    const SignUp = (
      <View style={styles.form}>
        <TextInput underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your email' />
        <TextInput underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your username' />
        <TextInput underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your password' />
        <TextInput underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Re-enter your password' />
        <TouchableOpacity style={styles.btnSubmit}><Text style={styles.boldText}>Submit</Text></TouchableOpacity>
      </View>
    )
    const {isSignIn}=this.props;
    const showComponent=isSignIn ? SignIn: SignUp;
    const title = isSignIn ? 'Sign in' : 'Sign up';

    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={require('../../img/auth.jpg')}
          />
        </View>
        <View style={styles.header}>
          <TouchableOpacity style={{paddingTop:10}} onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
            <Image style={styles.backHeader} source={require('../../media/appIcon/back.png')} />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>{title}</Text>
        </View>
        {showComponent} 
        <View style={styles.bottomContainer}>
          <TouchableOpacity 
          onPress={()=>this.props.dispatch({type:'TOGGLE_SIGNIN'})}
          style={isSignIn ?styles.btnChosenLeft: styles.btnNotChosenLeft}><Text style={isSignIn ? styles.boldText: { color: 'yellow' } }>Sign in</Text></TouchableOpacity>
          <TouchableOpacity
          onPress={()=>this.props.dispatch({type:'TOGGLE_SIGNIN'})}
          style={!isSignIn ?styles.btnChosenRight: styles.btnNotChosenRight}><Text style={isSignIn ? { color: 'yellow' } :styles.boldText}>Sign up</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state){
  return {
    isSignIn: state.isSignIn,
  }
}
export default connect(mapStateToProps)(Auth);


const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'space-between',
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
    backgroundColor:'#fff'
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
    // padding:10
  },
  backHeader: {
    width: 35, height: 35,
  },
  titleHeader: {
    color: 'black',
    padding: 10,
    marginLeft: width / 4,
    fontFamily: 'Arial',
    fontSize: 30
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center'
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
