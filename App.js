// import React, { Component } from 'react';
// // import {
// //     AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform,
// //     TouchableHighlight, RefreshControl, TextInput, TouchableOpacity

// // } from 'react-native';
// import { Provider } from 'react-redux';
// // import App from './ChangeComponent';
// // import store from './Change';
// import {createStore} from 'redux';

// const changeColor={
//     color:true,
// }

//  const reducer=(state=changeColor, action)=>{
//     if(action.type ='CHANGE'){
//         // ...state,
//         color:!state.color;
//     }
//  }
//  const store=createStore(reducer);


//  class App extends Component {
//   render() {
//       const {myColor}=this.props;
//       const mau=myColor? 'black': 'green';
//       return (
//           <View style={{ flex: 1 }}>
//               <Text style={{color:mau}} onPress={()=>this.props.dispatch({type:'CHANGE'})}>ahihi</Text>
//           </View >
//       );
//   }
// }
// function mapStateToProps(state){
//   return{
//       myColor:state.color,
//   }
// }
// connect(mapStateToProps)(App);


// export default class Root extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         );
//     }
// }