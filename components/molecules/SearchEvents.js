// @flow

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

type Props = {

}

export default class SearchEvents extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Ionicons style={styles.icon} name="ios-search" size={20} color="#848484" />
        <TextInput style={styles.textInput} placeholder="Search"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#d3d3d3',
    borderRadius: 5,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  textInput: {
    height: 45,
    paddingLeft: 10,
    flexGrow: 1,
  }
});
