import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import Dashboard from '../components/Auth/Dashboard/Dashboard';
import Deposit from '../components/Auth/Fund/Deposit';
import Accounts from '../components/Auth/Dashboard/Accounts';

export const DashboardTab = TabNavigator({

  Dashboard : {
    screen: Dashboard,
    navigationOptions: {
        tabBarLabel:'Dashboard',
        tabBarIcon: ({tintColor}) => <Icon name="ios-apps-outline" size={27} color={tintColor}/>,
    }
  },

  Deposit : {
    screen: Deposit,
    navigationOptions: {
        tabBarLabel:'Fund',
        tabBarIcon: ({tintColor}) => <Icon name="ios-card-outline" size={27} color={tintColor}/>,
    }
  },

  Accounts : {
    screen: Accounts,
    navigationOptions: {
        tabBarLabel:' ',
        tabBarIcon: ({tintColor}) => <Icon name="ios-aperture-outline" size={27} color={tintColor}/>,
        Index: 1,
    }
  },

  Histroy : {
    screen: Deposit,
    navigationOptions: {
        tabBarLabel:'History',
        tabBarIcon: ({tintColor}) => <Icon name="ios-calendar-outline" size={27} color={tintColor}/>,
    }
  },

  More : {
    screen: Dashboard,
    navigationOptions: {
        tabBarLabel:'More',
        tabBarIcon: ({tintColor}) => <Icon name="ios-more-outline" size={30} color={tintColor}/>,
    }
  },


}, {
    lazy: true,
    tabBarPosition: 'bottom',
    initialRouteName: 'Accounts',
    tabBarOptions: {
          activeTintColor: '#ffffff',
          inactiveTintColor: '#ffffff',
          inactiveBackgroundColor: '#0E3353',
          activeBackgroundColor: '#F27840',
          //showIcon: false,
          showLabel: false,
          indicatorStyle: {
            borderBottomColor: '#ffffff',
            borderBottomWidth: 2,
          },
          labelStyle:{
               fontSize: 12,
               justifyContent: 'center',
               alignItems: 'center',
           },
           style:{
               backgroundColor: '#223B4B',
           },
           tabStyle: {
               justifyContent: 'center',
               alignItems: 'center',
           }
     },
}
);


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
