import React, { Component } from 'react';
import {StyleSheet, View, Text, StatusBar, ListView} from 'react-native';

import Swipeout from 'react-native-swipeout';

export default class Accounts extends Component {




  render() {
    var swipeoutBtns = [
    {
      text: 'Button'
    }
    ]
    return (
            <View style={styles.container}>
            <StatusBar barStyle = "light-content" />


              <Swipeout right={swipeoutBtns}>
              <View>
                <Text>Swipe me left</Text>
              </View>
              </Swipeout>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E3353',
      marginTop: 50
  },

});
