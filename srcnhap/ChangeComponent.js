import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight, RefreshControl, TextInput, TouchableOpacity

} from 'react-native';
import {connect} from 'react-redux';


class App extends Component {
    render() {
        // const {myColor}=this.props;
        const mau1=this.props.myColor;
        const mau=mau1? 'black': 'green';
        return (
            <View style={{ flex: 1 }}>
                <Text style={{color:mau}} onPress={()=>this.props.dispatch({type:'CHANGE',id:2})}>ahihi</Text>
            </View >
        );
    }
}
function mapStateToProps(state){
    return{
        myColor:state.color,
        id:state.id,
    }
}
 export default connect(mapStateToProps,{})(App);