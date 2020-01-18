import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TabNavigator from './TabNavigator';

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: () => ({
      headerShown: false,
      headerStyle: {
        borderBottomWidth: 0,
      },
    }),
  },
);

export default createAppContainer(stackNavigator);
