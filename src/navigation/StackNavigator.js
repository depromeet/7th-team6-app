import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as screens from 'screens';
import TabNavigator from './TabNavigator';

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    Detail: {
      screen: screens.Detail,
    },
  },
  {
    initialRouteName: 'Detail',
    headerMode: 'none',
  },
);

export default createAppContainer(stackNavigator);
