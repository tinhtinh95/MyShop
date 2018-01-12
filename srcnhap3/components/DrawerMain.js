
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, StatusBar
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Auth from './Auth/Auth';
import Info from './Info/Info';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';
import { connect } from 'react-redux';

// import {connect} from 'react-redux';

// const {toggle_account}=this.props;

const DrawerItemAccount = DrawerNavigator(
  {
    Home: { screen: Main },
    Info: { screen: Info },
    OrderHistory: { screen: OrderHistory },
    Auth: { screen: Auth },
  }
)
const DrawerItemUnAccount = DrawerNavigator(
  {
    Home: { screen: Main },
    Auth: { screen: Auth },
  }
)

class DrawerMain extends React.Component {
  render() {

    const { toggle_account } = this.props;
    console.log(toggle_account);
    return (
      <View style={{ flex: 1, }}>
        {toggle_account ? <DrawerItemAccount/>:<DrawerItemUnAccount/> }
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

