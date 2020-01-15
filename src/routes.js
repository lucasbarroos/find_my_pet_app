import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';
import logo from './assets/logo.png';
import FeedScreen from './pages/Feed'
import PetScreen from './pages/Pet'

const Routes = createAppContainer(
  createStackNavigator({
    Feed: { screen: FeedScreen },
    Pet: { screen: PetScreen, params: { _id: 1 } }
  }, {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTitle: () => <Image source={logo} style={{ maxHeight: 60, maxWidth: 150 }} />,
      headerStyle: {
        backgroundColor: '#f5f5f5',
      }
    }
  })
);

export default Routes; 