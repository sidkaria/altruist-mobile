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
        keyExtractor={(item, index)=>index.toString()}
        data={this.props.events}
        renderItem={({item}) => 
          <EventCardItem
            eventID={item.id}
            title={item.name}
            description={item.description}
            image={item.imageUrl}
            location={item.address}
            start={item.start_time}
            end={item.end_time}
            registered={item.registered}
            imageUrl={item.image_url}>
          </EventCardItem>}
      />
    );
  }
}
