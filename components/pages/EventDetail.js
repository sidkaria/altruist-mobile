/* @flow */
import React, { Component } from 'react';
import { View, Text, Image, Button, SafeAreaView, StyleSheet, Alert } from 'react-native';

import { NavigationActions, StackActions, NavigationScreenProps, withNavigation } from 'react-navigation'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Modal from 'react-native-modal'

import MapView, { Circle, Marker } from 'react-native-maps'
import Icon from 'react-native-vector-icons/Fontisto'

type Props = NavigationScreenProps & {
}

type State = {
  loading: boolean,
  eventID?: string,
  title?: string,
  description?: string,
  registered?: boolean,
  imageUrl?: null,
  location?: string,
  start?: Date,
  end?: Date,
  location?: string,
  lat?: number,
  long?: number,
  modalVisible: boolean,
}

class EventDetail extends Component<Props, State> {
  
  static navigationOptions = {
    title: 'Event Details',
  };

  state = {
    loading: true,
    eventID: this.props.navigation.getParam('eventID', 'NO-ID'),
    modalVisible: false,
  }

  componentDidMount() {
    this.setState({eventID: this.props.navigation.getParam('eventID', 'NO-ID')})
    this.fetchEventInfo();
  }

  fetchEventInfo = () => {
    var startDate = new Date(2010, 10);
    var endDate = new Date(2050, 10)
    this.setState({
      loading: false,
      title: "SF Marathon",
      description: "Join the SF marathon now! Join the SF marathon now! Join the SF marathon now! Join the SF marathon now! Join the SF marathon now!",
      registered: true,
      imageUrl: null,
      start: startDate,
      end: endDate,
      location: "San Francisco",
      lat: 37.776030,
      long: -122.418800
    })
  }
  
  checkin() {
    var currDate = new Date();
    if (currDate >= this.state.start && currDate <= this.state.end) {
      //call backend checkin
      let success = true
      if (success) {
        this.setState({modalVisible: false})
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'CheckedIn'})],
          key: null,
        });    
        this.props.navigation.dispatch(resetAction)
      }
    } else {
      Alert.alert("Could not check in: not the right time.")
    }
    
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
      return (<View></View>)
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
            </View>
          </Modal>
        {
          this.state.lat != null ?
            <MapView
              style={styles.mapView}
              initialRegion={{
                latitude: this.state.lat,
                longitude: this.state.long,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Circle center={{latitude: this.state.lat, longitude: this.state.long}} radius={2000} fillColor="rgba(71,158,206,0.37)" strokeColor="#479ECE"/>
              <Marker coordinate={{latitude: this.state.lat, longitude: this.state.long}}/>
            </MapView>
          : 
            <View style={styles.mapView}/>
        }
        <View style={styles.rest}>
          <View style={styles.locationStuff}>
            <Icon name="map-marker-alt"></Icon>
            <Text style={styles.location}>{this.state.location}</Text>
          </View>
          <Text style={styles.title}>{this.state.title}</Text>
          <Text style={styles.description}>{this.state.description}</Text>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={styles.date}>Check In Time: {this.state.start.toLocaleString()}</Text>
          <Text style={styles.date}>Check Out Before: {this.state.end.toLocaleString()}</Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => this.state.registered ? this.setState({modalVisible: true}) : this.register()}>
            <Text style={{color: "#fff", fontSize: 16}}>{this.state.registered ? "Check In" : "Registered"}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    // color: '#848484',
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