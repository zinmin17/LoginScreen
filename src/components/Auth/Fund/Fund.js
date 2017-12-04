import React, { Component } from 'react';
import {StyleSheet, View, Text, AsyncStorage} from 'react-native';


export default class Fund extends Component {

  render() {

    return (
            <View style={styles.container}>

                    <Text style={styles.dashboard}>
                      This is Fund
                    </Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E3353'
  },
  dashboard:{
    padding: 20,
    textAlign: 'center',
    color:'#FFFFFF',
  }
});
