/* @flow */

import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import VolunteerCardItem from '../molecules/VolunteerCardItem';

type Props = {
  volunteers?: Array<Object>
}

export default class VolunteerCardList extends Component<Props> {

  render() {
    return (
      <FlatList
        keyExtractor={(item, index)=>index.toString()}
        data={this.props.volunteers}
        renderItem={({item}) => 
          <VolunteerCardItem
            eventID={1}
            name={item.name}
            volunteerid={item.id}
            status={item.status}
            >
          </VolunteerCardItem>}
      />
    );
  }
}