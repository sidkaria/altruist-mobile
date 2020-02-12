/* @flow */

import React, { Component } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import VolunteerCardList from '../organisms/VolunteerCardList';

type Props = {

}

type State = {
  loading: boolean,
  volunteers?: Array<Object>,
}

export default class OrganizerHome extends Component<Props, State> {

  timer = null;

  state = {
    loading: true,
  }

  componentDidMount() {
    this.timer = setInterval(()=> this.fetchVolunteers(), 5000);
  }

  fetchVolunteers() {
    return fetch('http://fakedomain/check_in/1/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ loading:false, volunteers: responseJson.volunteers });
      })
      .catch((error) => {
      })
  }

  

  render() {
    return (
      <SafeAreaView>
        {this.state.loading ? <ActivityIndicator /> :
          <VolunteerCardList volunteers={this.state.volunteers} />
        }
      </SafeAreaView>
    );
  }
}
