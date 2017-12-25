// import React, { Component } from 'react';
// import {
//     AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform,
//     TouchableHighlight, RefreshControl, TextInput, TouchableOpacity

// } from 'react-native';
// import {connect} from 'react-redux';

// class App extends Component {
//     render() {
//         const {myColor}=this.props;
//         const mau=myColor? 'black': 'green';
//         return (
//             <View style={{ flex: 1 }}>
//                 <Text style={{color:mau}} onPress={()=>this.props.dispatch({type:'CHANGE'})}>ahihi</Text>
//             </View >
//         );
//     }
// }
// function mapStateToProps(state){
//     return{
//         myColor:state.color,
//     }
// }
//  export default connect(mapStateToProps)(App);