/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';

import { NavigationActions, StackActions, NavigationScreenProps, withNavigation } from 'react-navigation'

import EventCardList from '../../components/organisms/EventCardList'

type Props = NavigationScreenProps & {};
type State = {
  loading: boolean,
};

class Splash extends Component<Props, State> {
  
  state = {
    // loading: true,
  }

  static navigationOptions = {
    headerShown: false,
  }

  componentDidMount() {
    return fetch('http://34.82.67.111/event/1')
      .then((response) => response.json())
      .then((responseJson) => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'TabNavigator'})],
          key: null,
        });    
        this.props.navigation.dispatch(resetAction);
      })
      .catch((error) =>{
        Alert.alert(error)
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.altruist}>Altruist</Text>
        {/* <ActivityIndicator color="#479ece" /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  altruist: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#479ece',
    marginBottom: 26,
  }
});

export default withNavigation(Splash);