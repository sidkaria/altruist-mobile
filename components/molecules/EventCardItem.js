/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ColorPropType,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto'

type Props = {
  title: String,
  description: String,
  image: ImageBitmap,
  location?: String,
  date?: String,
};

export default class EventCardItem extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>{this.props.title}</Text>
          <Text ellipsizeMode="tail" numberOfLines={3} style={styles.description}>{this.props.description}</Text>
          <Text style={styles.date}>{this.props.date}</Text>
          <View style={styles.locationStuff}>
            <Icon name="map-marker-alt"></Icon>
            <Text style={styles.location}>{this.props.location}</Text>
          </View>
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
    height: 150,
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
    marginRight: 10,
    flex: 4,
    flexDirection: "column"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 2,
  },
  description: {
    fontSize: 12,
    color: '#848484',
    flex: 4,
    flexShrink: 1,
  },
  date: {
    fontSize: 12,
    marginRight: 10,
    flex: 1,
  },
  locationStuff: {
    flexDirection: 'row',
    flex: 1,
  },
  location: {
    fontSize: 12,
    marginLeft: 5,
  },
  image: {
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: 'lightgrey'
  }
});
