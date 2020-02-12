/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type Props = {
  eventID: number,
  volunteerid: number,
  name: String,
  status: String,
}

export default class VolunteerCardItem extends Component<Props> {

  
  checkInVolunteer() {
    return fetch('http://fakedomain/check_in/1/' + this.props.eventID.toString() + "/", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        'check_in_approval': '2020-02-04T13:01:00'
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("After hitting check in approved: " + JSON.stringify(responseJson))
      })
      .catch((error) => {
        // Alert.alert(error)
        console.log(error)
      })

  // }
  }

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