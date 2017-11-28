import React, { Component } from 'react';
import {StyleSheet, View, Text, StatusBar, ListView} from 'react-native';

import Swipeout from 'react-native-swipeout';

export default class Accounts extends Component {




  render() {
    var swipeoutBtns = [
      {
        text: 'Fund',
        backgroundColor: '#F27840',
        color: '#E2E2E2',
        onPress: () => { this.deleteNote(rowData) }
      },
      {
        text: 'Setting',
        backgroundColor: '#595A6B',
        color: '#E2E2E2',
        onPress: () => { this.duplicateNote(rowData) }
      },
    ]
    return (
            <View style={styles.container}>
            <StatusBar barStyle = "light-content" />

                <Text style={styles.titleText}> Accounts </Text>

                <View style={styles.swipe_container}>
                <View style={styles.table_head_container}>
                        <Text style={styles.table_head}> Account </Text>
                        <Text style={styles.table_head}> Leverage </Text>
                        <Text style={styles.table_head}> Balance </Text>
                </View>
                <Swipeout right={swipeoutBtns}>
                  <View style={styles.text_container}>
                        <Text style={styles.account}>310045</Text>
                        <Text style={styles.table_text}>1:200< /Text>
                        <Text style={styles.balance}>5000.00<Text style={styles.currency}> SGD</Text>< /Text>
                  </View>
                </Swipeout>

                <Swipeout right={swipeoutBtns}>
                  <View style={styles.text_container}>
                        <Text style={styles.account}>310046</Text>
                        <Text style={styles.table_text}>1:400</Text>
                        <Text style={styles.balance}>5400.03 <Text style={styles.currency}> JPY</Text></Text>
                  </View>
                </Swipeout>

                <Swipeout right={swipeoutBtns}>
                  <View style={styles.text_container}>
                        <Text style={styles.account}>310047</Text>
                        <Text style={styles.table_text}>1:400</Text>
                        <Text style={styles.balance}>12493.44<Text style={styles.currency}> USD</Text></Text>
                  </View>
                </Swipeout>

                </View>

            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E3353',
  },
  titleText:{
    fontSize: 20,
    color : '#D3D2D0',
    textAlign: 'center',
    marginTop: '15%',
  },
  swipe_container:{
    marginTop: 50,
  },
  table_head_container:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  table_head:{
    fontWeight: 'bold',
    color : '#9FAFBB',
    width: '25%',
    margin:8,
  },
  text_container: {
    height: 60,
    borderWidth: 0.5,
    borderColor: '#575967',
    borderRightColor: '#F27840',
    borderRightWidth: 3,
    backgroundColor: '#0E3353',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  account:{
  fontWeight: 'bold',
    color : '#9FAFBB',
    width: '25%',
    margin:8,
  },
  table_text:{
    color : '#9FAFBB',
    width: '25%',
    margin:8,
  },
  balance:{
    fontWeight: 'bold',
    color : '#2CE39F',
    width: '25%',
    margin:8,
  },
  currency:{
    fontWeight: 'normal',
    color : '#DBDBDB',
    fontSize: 10,
    textAlignVertical: 'top',
  }

});
