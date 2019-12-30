/* @flow */
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import EventCardItem from '../../components/molecules/EventCardItem'

type Props = {
  events: Array<Object>,
}

export default class EventCardList extends Component<Props> {

  render() {
    return (
      <FlatList
        data={this.props.events}
        renderItem={({item}) => 
          <EventCardItem
            title={item.title}
            description={item.description}
            image={item.imageUrl}
            location={item.location}
            date={item.date}>
          </EventCardItem>}
      />
    );
  }
}
