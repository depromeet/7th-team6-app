import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {TabItem} from 'components';
import * as screens from 'screens';

export default createBottomTabNavigator(
  {
    Home: {
      screen: screens.Home,
    },
    Battle: {
      screen: screens.Battle,
    },
    Mypage: {
      screen: screens.Home,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarButtonComponent: props => (
        <TabItem routeName={navigation.state.routeName} {...props} />
      ),
    }),
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      style: {
        height: 50,
        borderTopWidth: 0,
        boxShadow: '0px 0px 3px rgba(160, 160, 160, 0.3)',
      },
    },
  },
);
