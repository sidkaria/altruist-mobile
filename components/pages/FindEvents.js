/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

import EventCardItem from '../../components/molecules/EventCardItem'

type Props = {};
type State = {
  events: Array<Object>,
};

export default class FindEvents extends Component<Props, State> {

  constructor() {
    super();
    this.state = {
      events: [
        {
          key: '1',
          title: "SF Marathon",
          description: "Join the SF marathon now!",
          imageUrl: null
        },
        {
          key: '2',
          title: "SF Marathon",
          description: "Join the SF marathon now!",
          imageUrl: null
        }
      ]
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.events}
          renderItem={({item}) => <EventCardItem
              title={item.title}
              description={item.description}
              image={item.imageUrl}>
            </EventCardItem>} >

        </FlatList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
