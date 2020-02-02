/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ColorPropType,
  Image,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto'
import { NavigationScreenProps, withNavigation } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = NavigationScreenProps & {
  eventID: String,
  title: String,
  description: String,
  registered: Boolean,
  imageUrl?: String,
  location?: {
    id?: Number,
    address_line?: String,
    city?: String,
    state?: String,
    postal_code?: String,
    country_code?: String,
    latitude?: String,
    longitude?: String,
  },
  start?: String,
  end? : String,
};

type State = {
  imageLoading: boolean,
}

class EventCardItem extends Component<Props, State> {

  state = {
    imageLoading: true,
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('EventDetail', { eventID: this.props.eventID })}>
        <View style={styles.container} >
          <View style={styles.textContainer}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>{this.props.title}</Text>
            <Text ellipsizeMode="tail" numberOfLines={3} style={styles.description}>{this.props.description}</Text>
            <Text style={styles.date}>{this.props.start} - {this.props.end}</Text>
            <View style={styles.locationStuff}>
              <Icon name="map-marker-alt"></Icon>
              <Text style={styles.location}>{this.props.location.city}</Text>
            </View>
          </View>
          <Image style={styles.image} source={{uri: this.props.imageUrl}}></Image>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 15,
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
    color: '#616161',
    flex: 3,
    flexShrink: 1,
  },
  date: {
    fontSize: 12,
    marginRight: 10,
    marginBottom: 5,
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
    borderColor: '#e4e4e4',
    borderRadius: 5,
  }
});

export default withNavigation(EventCardItem)