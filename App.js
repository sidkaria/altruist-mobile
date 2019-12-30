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

//navigation
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const App: () => React$Node = () => {
  return (
    <>
    </>
  );
};

const TabNavigator = createBottomTabNavigator({
  FindEvents: FindEvents,
  RegisteredEvents: RegisteredEvents
});

export default createAppContainer(TabNavigator);
