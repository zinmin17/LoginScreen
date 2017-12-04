import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, StatusBar, FlatList, Alert, Platform} from 'react-native';
//import  EvilIcons  from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Dashboard extends Component {

  constructor(props)
 {
   super(props);

   this.state = { GridViewItems: [
     {key: ' Profile', icon:'md-person'},
     {key: 'Address', icon:'md-home'},
     {key: 'POI', icon:'md-image'},
     {key: 'POR', icon:'md-image'},
     {key: 'Bank', icon:'md-card'},
     {key: 'Introducer', icon:'md-people'},
   ]}
 }

 GetGridViewItem (item) {

 Alert.alert(item);

 }

  render() {

    return (
      <View style={styles.container}>
      <View style={styles.containerWrap}>
          <Text style={styles.titleText}> Dashboard </Text>

          <View style={styles.profileContainer}>
              <View style={styles.profilepicWrap}>
                  <Image style={styles.profilepic} source={require('../../../images/profile-default.png')} />
              </View>
              <Text style={styles.profileText}> Zin Min </Text>
          </View>

          <View style={styles.emailContainer}>
              <Text style={styles.emailText}>  zm.mgmg@gmail.com </Text>
          </View>

          <FlatList
               data={ this.state.GridViewItems }
               renderItem={({item}) =>
                  <View style={styles.GridViewBlockStyle}>
                      <Icon name={item.icon} size={26} color="#0E3353" />
                      <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                  </View>}
                  numColumns={2}
          />
          </View>
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
    //marginTop: '15%',
  },
  containerWrap:{
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  profileContainer:{
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    //backgroundColor: 'rgba(0,0,0,0.5)',
    height: 150,
  },
  profilepicWrap:{
    width: 80,
    height: 80,
    borderRadius: 100,
    borderColor: '#C5C4C2',
    borderWidth:3,
    marginTop: '1%',
  },
  profilepic:{
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    //borderRadius: 40,
    //borderColor: '#fff',
    //borderWidth: 4,
  },
  profileText:{
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    color: '#2CE39F',//C5C4C2',
  },
  emailContainer:{
    backgroundColor: '#0E3353',//3E404C',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailText:{
    color: '#C5C4C2',
  },
  GridViewBlockStyle: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 120,
    backgroundColor: '#C5C4C2',
    borderWidth: 0.5,
    borderColor: '#B0AFAD',
  },
GridViewInsideTextItemStyle: {
   color: '#0E3353',//3E404C',
   padding: 10,
   fontSize: 12,
   justifyContent: 'center',
 },

});


{/*   <EvilIcons name="user" size={100} color="green" /> */}
