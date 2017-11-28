import React, { Component } from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import  EvilIcons  from 'react-native-vector-icons/EvilIcons';

export default class Dashboard extends Component {

  render() {

    return (
            <View style={styles.container}>
            <StatusBar barStyle = "light-content" />

                <Text style={styles.titleText}> Dashboard </Text>

                <View style={styles.profile_container}>
                  <EvilIcons name="user" size={100} color="green" />
                </View>

            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E3353'
  },
  titleText:{
    fontSize: 20,
    color : '#D3D2D0',
    textAlign: 'center',
    marginTop: '15%',
  },
  profile_container: {
    alignItems: 'center',
    marginTop:30,
  },
});
