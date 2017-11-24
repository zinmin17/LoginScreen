import React, { Component } from 'react';
import {StyleSheet, View, Text, AsyncStorage} from 'react-native';


export default class Deposit extends Component {

  render() {

    return (
            <View style={styles.container}>

                    <Text style={styles.dashboard}>
                      This is Deposit
                    </Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980b9'
  },
  dashboard:{
    padding: 20,
    textAlign: 'center',
    color:'#FFFFFF',
  }
});
