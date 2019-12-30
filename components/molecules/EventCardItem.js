/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ColorPropType,
  Image,
} from 'react-native';

type Props = {
  title: String,
  description: String,
  image: ImageBitmap,
  location?: String,
};

export default class EventCardItem extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
        <Image style={styles.image}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textContainer: {
    flex: 4,
    flexDirection: "column"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
  },
  description: {
    flex: 2,
  },
  image: {
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: 'lightgrey'
  }
});
