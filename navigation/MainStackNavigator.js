import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';

const stackNav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Category: {
      screen: CategoryScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default stackNav;
