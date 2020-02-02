/* @flow */

import React, { Component } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import VolunteerCardList from '../organisms/VolunteerCardList';

type Props = {

}

type State = {
  loading: boolean,
}

export default class OrganizerHome extends Component<Props, State> {

  state = {
    loading: true,
  }

  componentDidMount() {
    //websocket stuff
  }

  render() {
    return (
      <SafeAreaView>
        {this.state.loading ? <ActivityIndicator /> :
          <VolunteerCardList />
        }
      </SafeAreaView>
    );
  }
}
