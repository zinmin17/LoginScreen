import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, TextInput, KeyboardAvoidingView, TouchableHighlight, TouchableOpacity, StatusBar, AsyncStorage} from 'react-native';

import { StackNavigator } from 'react-navigation';
import {callLoginAPI} from '../Services/API/loginApi';
import ForgotPassword from './ForgotPassword';



 export default class Login extends Component {

  constructor(props){
      super(props);
      this.state = {
        email: '',
        password: '',
        isLoggingIn: false
      }
  }


  render() {
          const { navigation } = this.props;
          return (
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                      <StatusBar barStyle = "light-content" />
                      <View style={styles.logoContainer}>
                        <Image
                          style={styles.logo}
                          source={require('../../images/bg_logo2.png')}
                          />
                          <Text style={styles.entityText}> Taiwan Client Backoffice </Text>
                      </View>
                      <View style={styles.formContainer}>
                        <TextInput
                          placeholder = "email"
                          placeholderTextColor = "rgba(255,255,255,0.7)"
                          returnKeyType = "next"
                          style = {styles.input}
                          onSubmitEditing = {()=>this.passwordInput.focus()}
                          keyboardType = "email-address"
                          autoCapitalize = "none"
                          autoCorrect = {false}
                          onChangeText = { (email) => this.setState({email}) }
                          />
                        <TextInput
                          placeholder = "password"
                          placeholderTextColor = "rgba(255,255,255,0.7)"
                          returnKeyType = "go"
                          secureTextEntry
                          style={styles.input}
                          ref={(input)=>this.passwordInput = input}
                          onChangeText = { (password) => this.setState({password}) }
                          />
                        <TouchableOpacity
                          style={styles.buttonContainer}
                          disabled={!this.state.email||!this.state.password}
                          onPress={this.callapi}
                          >
                          <Text style={styles.buttonText}> LOGIN </Text>
                        </TouchableOpacity>
                      </View>
                </KeyboardAvoidingView>
          );
  }

  callapi=()=> {

    callLoginAPI({
            email: this.state.email,
            password: this.state.password,
        })
        .then((response) => {
            status = (JSON.parse(result).status);
            if(status === true){

                this.setState({isLoggingIn: true});
                this.props.onLoginPress();
            }
            else{
              alert(JSON.parse(result).message);
            }
        });
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980b9',
    padding : 20
  },
  entityText:{
    textAlign: 'center',
    color: '#FFFFFF',
    padding:30,
    flex:0.4
  },
  logoContainer:{
    alignItems: 'center',
    flex: 0.8,
    justifyContent: 'center',
  },
  logo:{
    width: 230,
    height: 50
  },
  formContainer:{
    padding: 10,
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
  },
  forgotPassword:{
    padding: 20,
    textAlign: 'center',
    color:'#FFFFFF',
  }
});
