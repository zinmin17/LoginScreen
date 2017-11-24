import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import Dashboard from '../components/Auth/Dashboard/DashboardIndex';
import Deposit from '../components/Auth/Fund/Deposit';

export const DashboardTab = TabNavigator({

  Dashboard : {
    screen: Dashboard,
    navigationOptions: {
        tabBarLabel:'Dashboard',
        tabBarIcon: ({tintColor}) => <Icon name="ios-home-outline" size={32} color={tintColor}/>,
    }
  },

  Deposit : {
    screen: Deposit,
    navigationOptions: {
        tabBarLabel:'Fund',
        tabBarIcon: ({tintColor}) => <Icon name="ios-card" size={32} color={tintColor}/>,
    }
  },

  O : {
    screen: Dashboard,
    navigationOptions: {
        tabBarLabel:' ',
        tabBarIcon: ({tintColor}) => <Icon name="ios-help-buoy-outline" size={32} color={tintColor}/>,
        Index: 1,
    }
  },

  Histroy : {
    screen: Deposit,
    navigationOptions: {
        tabBarLabel:'History',
        tabBarIcon: ({tintColor}) => <Icon name="ios-paper-outline" size={32} color={tintColor}/>,
    }
  },

  More : {
    screen: Dashboard,
    navigationOptions: {
        tabBarLabel:'More',
        tabBarIcon: ({tintColor}) => <Icon name="ios-more-outline" size={32} color={tintColor}/>,
    }
  },


});


{/*
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarLabel: 'Dashboard',
      tabBarOptions: {
        activeTintColor: 'White',
        activeBackgroundColor: 'darkGreen',
      },
    },
  },

  Fund: {
    screen: Deposit,
    navigationOptions: {
      tabBarLabel: 'Fund',
      //tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },

  M: {
    screen: Deposit,
    navigationOptions: {
      tabBarLabel: 'O'
      //tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },

  History: {
    screen: Deposit,
    navigationOptions: {
      tabBarLabel: 'History',
      //tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },

  More: {
    screen: Deposit,
    navigationOptions: {
      tabBarLabel: 'More',
      //tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
*/}

//});
