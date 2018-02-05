import React from "react";
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
  Image,
  Text
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import Home from "./components/Home";
import Favourite from "./components/Favourite";
import Setting from "./components/Setting";
import MovieDetail from "./components/MovieDetail";
import DrawerLayout from "./components/DrawerLayout";
import EditProfile from "./components/EditProfile";

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home"
    })
  },
  MovieDetail: {
    screen: MovieDetail,
    path: "movie/:id",
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
  }
});

export const FavouriteStack = StackNavigator({
  Favourite: {
    screen: Favourite,
    navigationOptions: ({ navigation }) => ({
      title: "Favourite"
    })
  },
  MovieDetail: {
    screen: MovieDetail,
    path: "",
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
  }
});

export const SettingStack = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: ({ navigation }) => ({
      title: "Setting"
    })
  }
});

export const TabStack = TabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) =>
          <Icon name="home" size={24} color={tintColor} />
      }
    },
    FavouriteStack: {
      screen: FavouriteStack,
      navigationOptions: {
        tabBarLabel: "Fav",
        tabBarIcon: ({ tintColor }) =>
          <Icon name="heart" size={24} color={tintColor} />
      }
    },
    SettingStack: {
      screen: SettingStack,
      navigationOptions: {
        tabBarLabel: "Setting",
        tabBarIcon: ({ tintColor }) =>
          <Icon name="tag" size={24} color={tintColor} />
      }
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      tabStyle: {
        height: 60,
        alignContent: "center"
      },
      labelStyle: {
        fontSize: 10
      }
    },
    tabBarPosition: "bottom"
  }
);

export const DrawerStack = DrawerNavigator(
  {
    Tabs: {
      screen: TabStack
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: ({ navigation }) => ({
        title: "EditProfile"
      })
    }
  },
  {
    drawerWidth: 300,
    drawerPosition: "left",
    contentComponent: props => <DrawerLayout {...props} />
  }
);
