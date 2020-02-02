/* @flow */
import React, { Component } from 'react';
import { View, Text, Image, Button, SafeAreaView, StyleSheet, Alert, TouchableOpacity, TouchableHighlight, ActivityIndicator } from 'react-native';

import { NavigationActions, StackActions, NavigationScreenProps, withNavigation } from 'react-navigation'
import Modal from 'react-native-modal'

import MapView, { Circle, Marker } from 'react-native-maps'
import Icon from 'react-native-vector-icons/Fontisto'

type Props = NavigationScreenProps & {
}

type State = {
  eventID: Number,
  loading: boolean,
  registerButtonLoading: boolean,
  event?: Object,
  modalVisible: boolean,
  waitingForOrganizer: boolean,
  registered?: boolean,
}

class EventDetail extends Component<Props, State> {
  
  static navigationOptions = {
    title: 'Event Details',
  };

  state = {
    loading: true,
    registerButtonLoading: true,
    eventID: this.props.navigation.getParam('eventID', 'NO-ID'),
    modalVisible: false,
    waitingForOrganizer: false,
  }

  componentDidMount() {
    this.setState({eventID: this.props.navigation.getParam('eventID', 'NO-ID')})
    this.fetchEventInfo();
  }

  fetchEventInfo = () => {
    fetch('http://34.82.67.111/event/' + this.state.eventID.toLocaleString())
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          event: responseJson
        });
      })
      .catch((error) =>{
        Alert.alert(error)
      });

    this.refreshRegisteredOrNot()
  }
  
  checkin() {
    this.setState({waitingForOrganizer: true})
    var currDate = new Date();
    if (currDate >= this.state.event.start_time && currDate <= this.state.event.end_time) {
      //call backend checkin
      var ws = new WebSocket('ws://host.com/path');
      ws.onopen = () => {
        ws.send('checkIn');
      }
      ws.onerror = () => {
        this.setState({modalVisible: false, waitingForOrganizer: false})
        Alert.alert("Could not check in.");
      }
      ws.onmessage = (e) => {
        if (e.toLocaleString() != 'success') {
          this.setState({modalVisible: false, waitingForOrganizer: false})
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'CheckedIn'})],
            key: null,
          });    
          this.props.navigation.dispatch(resetAction)
        }
      }
      ws.onclose = (e) => {
        console.log(e);
      }
    }
  }

  refreshRegisteredOrNot() {
    return fetch('http://34.82.67.111/volunteer_event/1')
      .then((response) => response.json())
      .then((responseJson) => {
        var reg = false

        for (var i = 0; i < responseJson.length; i++) {
          if (responseJson[i].id == this.state.eventID) {
              reg = true;
              break;
          }
        }

        this.setState({
          registerButtonLoading: false,
          registered: reg
        }, function(){

        });
      })
      .catch((error) =>{
        Alert.alert(error)
      });
  }

  register() {
    //call backend register with id=1
    let success = true
    if (success) {
      Alert.alert("Successfully registered")
      this.setState({registered: true})
    }
  }

  render() {
    if (this.state.loading)
      return (<View>
        <ActivityIndicator />
      </View>)
    else
      return (
      <SafeAreaView style={styles.container}>
        <Modal
          isVisible={this.state.modalVisible}
          onSwipeComplete={() => this.setState({modalVisible: false})}
          onBackdropPress={() => this.setState({modalVisible: false})}
          swipeDirection={['down']}
          style={styles.view}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Are you sure you want to check in right now?</Text>
              <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => this.state.registered ? this.checkin() : this.register()}>
                <Text style={{color: "#fff", fontSize: 16}}>Check In</Text>
              </TouchableOpacity>
              {this.state.waitingForOrganizer ?
                <View style={{marginTop: 20}}>
                  <Text style={{marginBottom: 10}}>Waiting for organizer approval.</Text>
                  <ActivityIndicator></ActivityIndicator>
                </View>
                :
                null
              }
            </View>
        </Modal>
        {
          this.state.event.address.latitude != null ?
            <MapView
              style={styles.mapView}
              initialRegion={{
                latitude: parseFloat(this.state.event.address.latitude),
                longitude: parseFloat(this.state.event.address.longitude),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Circle center={{latitude: parseFloat(this.state.event.address.latitude), longitude: parseFloat(this.state.event.address.longitude)}} radius={2000} fillColor="rgba(71,158,206,0.37)" strokeColor="#479ECE"/>
              <Marker coordinate={{latitude: parseFloat(this.state.event.address.latitude), longitude: parseFloat(this.state.event.address.longitude)}}/>
            </MapView>
          : 
            <View style={styles.mapView}/>
        }
        <View style={styles.rest}>
          <View style={styles.locationStuff}>
            <Icon name="map-marker-alt"></Icon>
            <Text style={styles.location}>{this.state.event.address.city}</Text>
          </View>
          <Text style={styles.title}>{this.state.event.name}</Text>
          <Text style={styles.description}>{this.state.event.description}</Text>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={styles.date}>Check In After: {this.state.event.start_time.toLocaleString()}</Text>
          <Text style={styles.date}>Check Out Before: {this.state.event.end_time.toLocaleString()}</Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => this.state.registered ? this.setState({modalVisible: true}) : this.register()}>
            {this.state.registerButtonLoading ? <ActivityIndicator /> : <Text style={{color: "#fff", fontSize: 16}}> {this.state.registered ? "Check In" : "Register"}</Text>}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
  mapView: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'lightgrey'
  },
  rest: {
    flex: 8,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    color: "#616161"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#479ece",
    padding: 15,
    // marginHorizontal: 10,
    borderRadius: 3,
  },
  locationStuff: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  location: {
    fontSize: 12,
    marginLeft: 5,
  },
  date: {
    color: '#848484',
    marginBottom: 10,
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

export default withNavigation(EventDetail)