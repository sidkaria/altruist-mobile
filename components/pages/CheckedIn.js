import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';

type Props = {
  
}

type State = {
  startTime?: Date,
  title?: string,
  loading: boolean,
  error: false,
}

class CheckedIn extends Component<Props, State> {

  static navigationOptions = {
    headerShown: false,
  }

  state = {
    loading: true,
    error: false,
  }

  componentDidMount() {
    //call backend for whether or not user is checked in
    let success = true
    if (success) this.setState(
      {
        loading: false,
        title: "SF Marathon 1"
      })
  }

  render() {
    if (this.state.loading) return (
      <View style={styles.container}>
        <ActivityIndicator
          color="#479ece"
        />
      </View>
    );
    else return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.checkedInTitle}>You are now Checked In to:</Text>
        <Text style={styles.title}>{this.state.title}</Text>
        <ActivityIndicator
          size="large"
          color="#479ece"
        />
        <Text style={styles.timeElapsed}></Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  checkedInTitle: {
    color: "#848484",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
  }
});

export default CheckedIn