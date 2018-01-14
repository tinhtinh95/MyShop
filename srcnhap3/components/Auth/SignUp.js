
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { toggle_signin } from '../../actions/actions';
import register from '../../api/register';

const { width } = Dimensions.get('window');

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      rePassword: '',
    }
  }
 
  onSucess=()=>{
    Alert.alert(
      'Notice',
      'Sign In successfully',
      [
        {text: 'OK', onPress: () => {this.props.toggle_signin()}}, // {this.props.toggle_signin()}
      ],
      { cancelable: false }
    )
  }
  onFail=()=>{
    Alert.alert(
      'Notice',
      'The email has been existed',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  registerUser=()=>{
    const {email, name, password}=this.state;
    register(email,name,password)
    .then(res=>{
      if(res ==='THANH_CONG') return this.onSucess();
      return this.onFail();
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.form}>
        <TextInput
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
          underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your email' />
        <TextInput
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
          underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your username' />
        <TextInput
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
          secureTextEntry={true}
          underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your password' />
        <TextInput
          value={this.state.rePassword}
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ rePassword: text })}
          underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Re-enter your password' />
        <TouchableOpacity style={styles.btnSubmit}
        onPress={this.registerUser}
        ><Text style={styles.boldText}>Submit</Text></TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
export default connect(null,{toggle_signin})(SignUp);

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
    backgroundColor: '#fff'
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

});
