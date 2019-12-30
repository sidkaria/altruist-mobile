/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

type Props = {};

export default class MyComponent extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>I'm the MyComponent component</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
