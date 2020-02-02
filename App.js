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

import FindEvents from './components/pages/FindEvents'
import RegisteredEvents from './components/pages/RegisteredEvents'
import EventDetail from './components/pages/EventDetail'
import CheckedIn from './components/pages/CheckedIn'
import Splash from './components/pages/Splash'
import Profile from './components/pages/Profile'
import OrganizerHome from './components/pages/OrganizerHome';

//navigation
import 'react-native-gesture-handler'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
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
    },
    "Profile": {
      screen: Profile
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Find Events') {
          iconName = `ios-list${focused ? '-box' : ''}`;
        } else if (routeName === 'Registered Events') {
          iconName = `ios-done-all`;
        } else {
          iconName= `ios${focused ? '-contact' : '-person'}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#479ece',
      inactiveTintColor: 'gray',
    },
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      const headerTitle = routeName;
      return {
        headerTitle,
      }
    },
    
  }
);

const StackNavigator = createStackNavigator(
  {
    Splash: Splash,
    TabNavigator: TabNavigator,
    EventDetail: EventDetail,
    CheckedIn: CheckedIn,
  },
  {
    initialRouteName: 'Splash',
  }
);

const OrganizerStackNavigator = createStackNavigator(
  {
    Home: OrganizerHome,
  }
)

const SwitchStackNavigator = createSwitchNavigator(
  {
    Volunteer: StackNavigator,
    Organizer: OrganizerStackNavigator,
  },
  {
    initialRouteName: 'Volunteer',
  }
)


export default createAppContainer(SwitchStackNavigator);
