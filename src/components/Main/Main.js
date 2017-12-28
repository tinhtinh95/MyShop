
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Cart from "./Cart/Cart";
import Contact from "./Contact/Contact";
import Search from "./Search/Search";
import Shop from "./Shop/Shop";
import Header  from "./Header/Header";

const TabMain = TabNavigator({
  Home: { screen: Shop },
  Cart: { screen: Cart },
  Search: { screen: Search },
  Contact: { screen: Contact },

},

  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },

  })


// class Header extends React.Component{
//   _Open=()=>{
//     this.props.open
//   }
//   render(){
//     return(
//       <View style={{backgroundColor:"#bdbdbd",alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
//       <TouchableOpacity style={{justifyContent:'flex-start'}}
//        onPress={this.props._Open}
//       >
//           <Image style={{width:20, height:20}} source={require('./ic_menu.png')}/>
//       </TouchableOpacity>
//       <Text style={{justifyContent:'center',alignItems:'center',fontSize:20}}>Header</Text>

//     </View>
//     )
//   }
// }

// const StackMain=StackNavigator({
//   Home:{screen: TabMain}
// },{
//   navigationOptions:({navigation}) => ({
//     // _onP=(navigation)=>{
//     //   navigation.navigate("DrawerOpen");
//     // },
//     headerLeft: //<Header navigation={navigation} />,
//     <Text ref="ahihi" onPress={()=>navigation.navigate("DrawerOpen")}>ahihi</Text>
//   }),
// })


class StackMain extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header open={this.props.open}/>
        <TabMain />
      </View>
    )
  }
}

export default class Main extends React.Component {

  
  _onOpen = () => {
    this.props.navigation.navigate('DrawerOpen')
    // alert("ahihi")
  }
  render() {
    return (
      <StackMain open={this._onOpen} />
     
    );
  }
}
// export default StackMain;

