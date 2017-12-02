import React, { Component } from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList, Alert, Platform} from 'react-native';
//import  EvilIcons  from 'react-native-vector-icons/EvilIcons';

export default class Dashboard extends Component {

  constructor(props)
 {
   super(props);

   this.state = { GridViewItems: [
     {key: 'One'},
     {key: 'Two'},
     {key: 'Three'},
     {key: 'Four'},
     {key: 'Five'},
     {key: 'Six'},
   ]}
 }

 GetGridViewItem (item) {

 Alert.alert(item);

 }

  render() {

    return (
      <View style={styles.container}>
          <Text style={styles.titleText}> Dashboard </Text>

          <View style={styles.profileContainer}>
            <Text> email : adfjadfj@adfjlds.com </Text>
          </View>
          <FlatList style={styles.GridViewContainer}
               data={ this.state.GridViewItems }
               renderItem={({item}) =>
                  <View style={styles.GridViewBlockStyle}>
                      <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                  </View>}
                  numColumns={2}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    justifyContent: 'center',
    flex:1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: '#0E3353',
  },
  titleText:{
    fontSize: 20,
    color : '#D3D2D0',
    textAlign: 'center',
    marginTop: '15%',
  },
  profileContainer:{
    position: "absolute",
    marginTop: '2%',
  },
  GridViewContainer:{
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'green',
  },
  GridViewBlockStyle: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 100,
    backgroundColor: '#C5C4C2',
    borderWidth: .5,
    borderColor: '#B0AFAD',
  },
GridViewInsideTextItemStyle: {
   color: '#3E404C',
   padding: 10,
   fontSize: 18,
   justifyContent: 'center',
 },

});


{/*   <EvilIcons name="user" size={100} color="green" /> */}
