import React, { Component } from 'react';
import {StyleSheet, View, Text, AsyncStorage} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Fund extends Component {

  render() {

    return (
            <View style={styles.container}>

                <Text style={styles.titleText}> Fund </Text>
                <View style={styles.boxContainer}>
                    <View style={styles.depositBox}>
                        <Icon name="md-arrow-dropup-circle" size={45} color="#2CE39F" style={styles.iconBox} />
                        <Text style={styles.textBox}>Deposit</Text>
                    </View>
                    <View style={styles.withdrawalBox}>
                        <Icon name="md-arrow-dropdown-circle" size={45} color="#3A8BD6" style={styles.iconBox} />
                        <Text style={styles.textBox}>Withdrawal</Text>
                    </View>
                    <View style={styles.transferBox}>
                        <Icon name="md-arrow-dropright-circle" size={45} color="#C5C4C2" style={styles.iconBox} />
                        <Text style={styles.textBox}>Internal Transfer</Text>
                    </View>

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
  boxContainer:{
    marginTop: '10%',

  },
  depositBox:{
    height: 120,
    margin: 10,
    backgroundColor: '#183b59',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',

  },
  withdrawalBox:{
    height: 120,
    margin: 10,
    backgroundColor: '#183b59',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  transferBox:{
    height: 120,
    margin: 10,
    backgroundColor: '#183b59',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  iconBox:{
    margin: 30,
    width: '15%',
  },
  textBox:{
    //fontWeight: 'bold',
    fontSize: 20,
    color : '#9FAFBB',
    //width: '25%',
    margin:8,
  },
});
