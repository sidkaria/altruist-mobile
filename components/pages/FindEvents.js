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

export default class FindEvents extends Component<Props, State> {

  constructor() {
    super();
    this.state = {
      loading: false,
      events: [
        {
          key: '1',
          title: "SF Marathon 1",
          description: "Join the SF marathon now! Join the SF marathon now! Join the SF marathon now! Join the SF marathon now! Join the SF marathon now!",
          imageUrl: null,
          date: "12/31/19 12:30 - 3:30PM PST",
          location: "San Francisco"
        },
        {
          key: '2',
          title: "SF Marathon 2",
          description: "Join the SF marathon now!",
          imageUrl: null,
          date: "12/31/19 12:30 - 3:30PM PST",
          location: "San Francisco"
        },
        {
          key: '3',
          title: "SF Marathon 3",
          description: "Join the SF marathon now!",
          imageUrl: null,
          date: "12/31/19 12:30 - 3:30PM PST",
          location: "San Francisco"
        }
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
