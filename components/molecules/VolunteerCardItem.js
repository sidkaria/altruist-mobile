/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type Props = {
  name: String,
}

export default class VolunteerCardItem extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} />
        <Text style={styles.title}>{this.props.name}</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  }
});