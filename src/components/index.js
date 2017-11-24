import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Login from './Login/Login';
import ForgotPassword from './Login/ForgotPassword';
import {DashboardTab} from '../config/routes';

class LoginScreen extends Component {

  state = {
     isLoggedIn: true
   }

   static navigationOptions = {
     header: null
   };

  render() {
    const { navigation } = this.props;
      if (!this.state.isLoggedIn)

          return(
            <View style={styles.container}>
                <Login onLoginPress={() => this.setState({isLoggedIn: true})} />
                <TouchableHighlight style={styles.forgotPasswordContainer}>
                    <Text
                      style={styles.forgotPassword}
                      onPress={() => navigation.navigate('ForgotPasswordScreen')}
                      >
                      Forgot Password?
                    </Text>
                </TouchableHighlight>
            </View>
          );

      else
          return <DashboardTab
              onLogoutPress={() => this.setState({isLoggedIn: false})}
              />;
  }
}


const LoginMain = StackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    ForgotPasswordScreen: { screen: ForgotPassword },
  }
);


export default class Index extends React.Component {
  render() {
    return <LoginMain />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980b9'
  },
  forgotPasswordContainer:{
  //  flex:0.
  },
  forgotPassword:{
    padding: 20,
    textAlign: 'center',
    color:'#FFFFFF',
  }
});
