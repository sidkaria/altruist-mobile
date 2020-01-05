/* @flow */
import React, { Component } from 'react';
import { View, Text, Image, Button, SafeAreaView, StyleSheet, Alert } from 'react-native';

import { NavigationScreenProps, withNavigation } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { MapView } from 'react-native-maps'

type Props = NavigationScreenProps & {
}

type State = {
  loading: boolean,
  eventID?: string,
  title?: string,
  description?: string,
  registered?: boolean,
  imageUrl?: null,
  location?: string,
  start?: string,
  end?: string,
  location?: string,
  lat?: number,
  long?: number,
}

class EventDetail extends Component<Props, State> {
  
  static navigationOptions = {
    title: 'Event Details',
  };

  state = {
    loading: true,
    eventID: this.props.navigation.getParam('eventID', 'NO-ID'),
  }

  componentDidMount() {
    this.fetchEventInfo();
  }

  fetchEventInfo = () => {
    this.setState({
      loading: false,
      title: "SF Marathon 1",
      description: "Join the SF marathon now! Join the SF marathon now! Join the SF marathon now! Join the SF marathon now! Join the SF marathon now!",
      registered: true,
      imageUrl: null,
      start: "12/31/19 12:30PM",
      end: "12/31/19 3:30PM",
      location: "San Francisco",
      lat: -122.53354,
      long: 34.56986
    })
  }

  register() {
    //call backend register with id=1
    let success = true
    if (success) {
      Alert.alert("Successfully registered")
      this.setState({registered: true})
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapView style={styles.mapView} />
        <View style={styles.rest}>
          <Text style={styles.title}>{this.state.title}</Text>
          <Text>{this.state.description}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => this.register()}>
          <Text style={{color: "#fff", fontSize: 16}}>{this.state.registered ? "Check In" : "Register"}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgrey'
  },
  rest: {
    flex: 3,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#479ece",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 3,
  }
});

export default withNavigation(EventDetail)