/* @flow */
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions, NavigationScreenProps, withNavigation } from 'react-navigation'

import {Surface, Shape} from '@react-native-community/art';
import * as Progress from 'react-native-progress';
import Modal from 'react-native-modal'

type Props = NavigationScreenProps & {
  eventID?: string,
}

type State = {
  start?: Date,
  end?: Date,
  title?: string,
  loading: boolean,
  error: boolean,
  modalVisible: boolean,
}

class CheckedIn extends Component<Props, State> {

  static navigationOptions = {
    headerShown: false,
  }

  state = {
    loading: true,
    error: false,
    modalVisible: false,
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

  checkOut() {
    //call backend for checkout
    //on success
    this.setState({
      modalVisible: false,
    })
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({routeName: 'TabNavigator'}),
        NavigationActions.navigate({routeName: 'EventDetail', params: {eventID: 1}})
      ],
      key: null,
    });    
    this.props.navigation.dispatch(resetAction)
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
        <Modal
          isVisible={this.state.modalVisible}
          onSwipeComplete={() => this.setState({modalVisible: false})}
          onBackdropPress={() => this.setState({modalVisible: false})}
          swipeDirection={['down']}
          style={styles.view}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Are you sure you want to check out right now?</Text>
              <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => this.checkOut()}>
                <Text style={{color: "#fff", fontSize: 16}}>Check Out</Text>
              </TouchableOpacity>
            </View>
        </Modal>
        <Text style={styles.checkedInTitle}>You are checked in to</Text>
        <Text style={styles.title}>{this.state.title}  <Text style={{color: "#848484"}}>for</Text></Text>
        <Progress.Circle style={{marginBottom: 30}} size={30} indeterminate={true} indeterminateAnimationDuration={1500} borderWidth={2} size={120} showsText={true} formatText={(progress) => "20 min"}>
        </Progress.Circle>
        <Text style={styles.endTime}>This event lasts till 12:30pm.</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.checkOutButton} onPress={() => this.setState({modalVisible: true})}>
          <Text style={{color: "red", fontSize: 16}}>Check Out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
  },
  endTime: {
    fontSize: 16,
    color: "#848484",
    marginBottom: 22,
  },
  // timeElapsedView: {
  //   position: "absolute",
  //   alignSelf: "center",
  //   alignItems: "center",
  //   transform: [{translateY: '35%'}]
  // },
  // timeElapsedText: {
  //   fontSize: 30,
  //   fontWeight: "bold",
  //   color: "#848484"
  // }
  checkOutButton: {
    alignItems: "center",
    // backgroundColor: "#479ece",
    padding: 15,
    // marginHorizontal: 10,
    // borderRadius: 3,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#479ece",
    padding: 15,
    borderRadius: 3,
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 22,
  },
});

export default withNavigation(CheckedIn)