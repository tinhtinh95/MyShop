import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity 
} from 'react-native';




export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            data:''
        }
    }
    componentDidMount(){
        fetch('http://api.openweathermap.org/data/2.5/find?units=metric&appid=01cc37655736835b0b75f2b395737694&q=danang')
        .then(res=>res.json())
        .then(resJson=>{
            this.setState({data:resJson})
        })
        .catch(e=>console.log(e))
    }
    render(){
        return(
            <View>
                <Text>ahihi</Text>
                <Text>{this.state.data}</Text>
            </View>
        )
    }
}