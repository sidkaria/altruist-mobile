/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FindEvents from './components/pages/FindEvents';
import RegisteredEvents from './components/pages/RegisteredEvents'
import EventDetail from './components/pages/EventDetail'

//navigation
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

const TabNavigator = createBottomTabNavigator(
  {
    "Find Events": {
      screen: FindEvents,
    },
    "Registered Events": {
      screen: RegisteredEvents
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Find Events') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Registered Events') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'skyblue',
      inactiveTintColor: 'gray',
    },
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      const headerTitle = routeName;
      return {
        headerTitle,
      }
    }
  }
);

const StackNavigator = createStackNavigator(
  {
    TabNavigator: TabNavigator,
    EventDetail: EventDetail
  },
  {
    initialRouteName: 'TabNavigator',
  }
);


export default createAppContainer(StackNavigator);
