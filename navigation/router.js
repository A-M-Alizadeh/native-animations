import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//screens
import Home from './../screens/Home';
import Splash from '../screens/Splash';

const RootStack = createStackNavigator(
  {
    Splash: Splash,
    Home: Home,
  },
  {
    initialRouteName: 'Splash',
  },
  
);

export const AppContainer = createAppContainer(RootStack);