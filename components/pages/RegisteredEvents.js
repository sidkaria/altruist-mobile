/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

import EventCardList from '../../components/organisms/EventCardList'

type Props = {};
type State = {
  loading: boolean,
  events: Array<Object>,
};

export default class RegisteredEvents extends Component<Props, State> {

  constructor() {
    super();
    this.state = {
      loading: false,
      events: [
        {
          key: '1',
          eventID: '18935',
          title: "SF Marathon 1",
          description: "Join the SF marathon now! Join the SF marathon now! Join the SF marathon now! Join the SF marathon now! Join the SF marathon now!",
          registered: true,
          imageUrl: null,
          start: "12/31/19 12:30PM",
          end: "12/31/19 3:30PM",
          location: "San Francisco",
          lat: "-122.53354",
          long: "34.56986"
        },
      ]
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <EventCardList events={this.state.events} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
