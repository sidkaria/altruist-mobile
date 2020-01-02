/* @flow */
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { NavigationScreenProps, withNavigation } from 'react-navigation'

type Props = NavigationScreenProps & {
}

type State = {
  loading: boolean,
  eventName: string,
}

class EventDetail extends Component<Props, State> {
  
  static navigationOptions = {
    title: 'Event Details',
  };

  state = {
    loading: true,
    eventName: "",
  }

  componentDidMount() {
    let eventID = this.props.navigation.getParam('eventID', 'NO-ID');
    const name: string = this.fetchEventInfo(eventID);
    this.setState({
      loading: false,
      eventName: name
    })
  }

  fetchEventInfo = (eventID) => {
    return eventID.toString()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} />
        <View style={styles.rest}>
          <Text style={styles.title}>{this.state.eventName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
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
  }
});

export default withNavigation(EventDetail)