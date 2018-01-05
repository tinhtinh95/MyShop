
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, StausBar, TouchableOpacity,AsyncStorage
} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: 1,
        }
    }
    savedata = async (count) => {
        try {
            count = count + 1;
            this.setState({count:JSON.parse(value)})
            console.log('count: ',count);
            await AsyncStorage.setItem('@count', JSON.stringify(count));
            console.log('da set');
        } catch (error) {
            console.log('loi set');
        }
    }
    getdata = async() => {
        try {
            const value = await AsyncStorage.getItem('@count');
            if (value !== null) {
                // We have data!!
                console.log('value:',value);
                return value;
                // this.setState({count:JSON.parse(value)})
            }
        } catch (error) {
            console.log('loi get');
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                onPress={()=>this.savedata(this.state.count)}
                >
                    <Text>save</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity 
                onPress={()=>this.getdata()}
                >
                    <Text>get</Text>
                </TouchableOpacity> */}
                <Text>{this.getdata()}</Text>
            </View>
        )
    }
}




