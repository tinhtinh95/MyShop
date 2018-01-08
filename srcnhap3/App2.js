
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, StausBar, TouchableOpacity,AsyncStorage, StatusBar
} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: 1,
        }
    }
    componentWillMount(){
        StatusBar.setHidden(true);
    }
    savedata = async (count) => {
        try {
            count = count + 1;
            console.log('count: ',count);
            this.setState({count})
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
                console.log('value:',value);
                this.setState({count:JSON.parse(value)})
                return value;
                
            }
        } catch (error) {
            console.log('loi get');
            return 1;
        }
    }
    componentWillMount(){
        this.getdata();
    }
    render() {
        const a=this.getdata();
        return (
            <View>
                <TouchableOpacity
                onPress={()=>this.savedata(this.state.count)}
                >
                    <Text>add</Text>
                </TouchableOpacity>
               
                <Text>{this.state.count}</Text>
            </View>
        )
    }
}




