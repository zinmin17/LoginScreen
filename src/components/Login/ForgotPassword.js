import React, { Component } from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar} from 'react-native';

export default class ForgotPassword extends Component {

  //Header & Topbar Options
  static navigationOptions = {

  headerStyle: {
     position: 'absolute',
     top: 0,
     left: 0
   },
   headerBackTitleStyle: {
       opacity: 0,
   },
   headerTintColor: '#fff'

 };

render() {

    return (

        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar
              barStyle = "light-content"
            />
            <View style={styles.formContainer}>
                <Text h2 style={styles.titleText}>Forgot Password</Text>
                 <TextInput
                   placeholder = "email"
                   placeholderTextColor = "rgba(255,255,255,0.7)"
                   returnKeyType = "next"
                   style = {styles.input}
                   onSubmitEditing = {()=>this.passwordInput.focus()}
                   keyboardType = "email-address"
                   autoCapitalize = "none"
                   autoCorrect = {false}
                   />
                 <TouchableOpacity style={styles.buttonContainer}>
                   <Text style={styles.buttonText}>Request</Text>
                 </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding : 20,
    flex: 1,
    backgroundColor: '#2980b9'
  },
  titleText:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 50
  },
  formContainer:{
    flex: 1,
    justifyContent: 'center'
  },
  forgotPassword:{
    padding: 20,
    textAlign: 'center',
    color:'#FFFFFF'
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color : '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer:{
    backgroundColor: '#d35400',
    paddingVertical: 15
  },
  buttonText:{
    textAlign: 'center',
    color:'#FFFFFF',
    fontWeight: '700'
  }

});
