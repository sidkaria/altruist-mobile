/* @flow */
import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation, NavigationScreenProps } from 'react-navigation';

type Props = NavigationScreenProps & {

}

class Profile extends Component<Props> {

  navigateToOrganizer() {
    this.props.navigation.navigate('Organizer');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => this.navigateToOrganizer()}>
          <Text style={{color: 'white'}}>Switch to Organizer</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#479ece",
    padding: 15,
    borderRadius: 3,
  },
});

export default withNavigation(Profile);