import React, { Component } from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

export default class DashboardIndex extends Component {

  render() {

    return (
            <View style={styles.container}>
            <StatusBar barStyle = "light-content" />

                    <Text style={styles.dashboard}>
                      Login Dashboard
                    </Text>

            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B557C'
  },
  dashboard:{
    padding: 20,
    textAlign: 'center',
    color:'#FFFFFF',
  }
});
