
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
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { toggle_signin } from '../../actions/actions';
import register from '../../api/register';

const { width } = Dimensions.get('window');

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      rePassword: '',
    }
  }
  registerUser=()=>{
    const {email, name, password}=this.state;
    register(email,name,password)
    .then(res=>console.log(res))
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
