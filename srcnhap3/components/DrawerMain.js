
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, StatusBar, ScrollView
} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Auth from './Auth/Auth';
import Info from './Info/Info';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';
import { connect } from 'react-redux';



const DrawerItemAccount = DrawerNavigator(
  {
    Home: { screen: Main },
    Info: { screen: Info },
    OrderHistory: { screen: OrderHistory },
    Auth: { screen: Auth },
  },
  {
    contentOptions: {
      activeTintColor: 'red',
      style: {
        marginVertical: 100,
      }
    }
  }
)
const DrawerItemUnAccount = DrawerNavigator(

  {
    Home: { screen: Main },
    Auth: { screen: Auth },
  },
  {
    // contentOptions: {
    //   activeTintColor: '#e91e63',
    //   itemsContainerStyle: {
    //     marginVertical: 0,
    //   },
    //   iconContainerStyle: {
    //     opacity: 1
    //   },
    //   paddingTop:40,
    // },
    drawerBackgroundColor: '#34B080',
    useNativeAnimations: true,
    contentComponent: (props) => (
      <View style={{ marginTop: 100,}}>
        <ScrollView>
          <DrawerItems
            {...props}
            getLabel={(scene) => (
              <View style={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'pink',
                padding: 10,
                margin: 10,
                width:'90%',
                borderRadius:10,
                justifyContent:'center',
                alignItems:'center'
              }}>
                <Text style={styles.buttonText}>{props.getLabel(scene)}</Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    )

  },
  {
    contentComponent: ({ navigation }) => (
      <Drawer navigation={navigation} />
    ),
  }
)

class DrawerMain extends React.Component {
  render() {

    const { toggle_account } = this.props;
    console.log(toggle_account);
    return (
      <View style={{ flex: 1, backgroundColor: '#ed6c5d' }}>

        {toggle_account ? <DrawerItemAccount /> : <DrawerItemUnAccount />}
        {/* <DrawerItemAccount toggle={toggle_account}/> */}
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    toggle_account: state.toggle_account,
  }
}



export default connect(mapStateToProps)(DrawerMain);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

