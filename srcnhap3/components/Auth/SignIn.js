
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
import signin from '../../api/signin';
import {toggle_account} from '../../actions/actions';
import {connect} from 'react-redux';

const { width } = Dimensions.get('window');

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onSignIn = () => {
        const { email, password } = this.state;
        signin(email, password)
            .then(res =>  {this.props.toggle_account()})
            .catch(err => console.log(err));
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.form}>
                <TextInput
                    value={this.state.email}
                    onChangeText={(text) => this.setState({ email: text })}
                    underlineColorAndroid='transparent'
                    style={styles.inputStyle}
                    placeholderTextColor='#333333'
                    placeholder='Enter your email' />
                <TextInput
                    value={this.state.password}
                    onChangeText={(text) => this.setState({ password: text })}
                    underlineColorAndroid='transparent'
                    style={styles.inputStyle}
                    placeholderTextColor='#333333'
                    placeholder='Enter your password'
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    onPress={this.onSignIn}
                    style={styles.btnSubmit}>
                    <Text style={styles.boldText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(null, {toggle_account})(SignIn);

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
