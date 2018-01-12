
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
import register from '../../api/register';

const { width } = Dimensions.get('window');

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            name:'',
            password:'',
        }
    }
    render() {
        return (
            <View style={styles.form}>
                <TextInput 
                value={this.state.name}
                onChangeText={(text)=> this.setState({name: text})}
                underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your username' />
                <TextInput
                value={this.state.password}
                onChangeText={(text)=> this.setState({password: text})}
                underlineColorAndroid='transparent' style={styles.inputStyle} placeholderTextColor='#333333' placeholder='Enter your password' />
                <TouchableOpacity style={styles.btnSubmit}><Text style={styles.boldText}>Submit</Text></TouchableOpacity>
            </View>
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
