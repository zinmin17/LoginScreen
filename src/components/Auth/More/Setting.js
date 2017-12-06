import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';


export default class Setting extends Component {
  render() {
    return (

      <View style={styles.container}>
      <StatusBar barStyle = "light-content" />

          <Text style={styles.titleText}> Setting </Text>

          <ScrollView>
            <List>
              <ListItem style={styles.itemBox}
                title="Password"
                leftIcon={{ name: 'vpn-key' }}
                 onPress={ function(){console.log('pressed')} }
              />
              <ListItem
                title="SecureCode"
                leftIcon={{ name: 'verified-user' }}
              />
              <ListItem
                title="Language"
                leftIcon={{ name: 'people' }}
              />
              <ListItem
                title="Chat"
                leftIcon={{ name: 'chat' }}
              />
            </List>
            <List>
              <ListItem
                title="Sign Out"
                rightIcon={{ name: 'cancel' }}
              />
            </List>
          </ScrollView>

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
  itemBox:{
    backgroundColor: '#0E3353',
  },
});
