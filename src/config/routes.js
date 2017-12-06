import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import Dashboard from '../components/Auth/Dashboard/Dashboard';
import Fund from '../components/Auth/Fund/Fund';
import Accounts from '../components/Auth/Dashboard/Accounts';
import Noti from '../components/Auth/Notification/Noti';
import Setting from '../components/Auth/More/Setting';

export const DashboardTab = TabNavigator({

  Dashboard : {
    screen: Dashboard,
    navigationOptions: {
        tabBarLabel:'Dashboard',
        tabBarIcon: ({tintColor}) => <Icon name="ios-apps-outline" size={27} color={tintColor}/>,
    }
  },

  Fund : {
    screen: Fund,
    navigationOptions: {
        tabBarLabel:'Fund',
        tabBarIcon: ({tintColor}) => <Icon name="ios-card" size={27} color={tintColor}/>,
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

  Noti : {
    screen: Noti,
    navigationOptions: {
        tabBarLabel:'Noti',
        tabBarIcon: ({tintColor}) => <Icon name="ios-notifications-outline" size={27} color={tintColor}/>,
    }
  },

  Setting : {
    screen: Setting,
    navigationOptions: {
        tabBarLabel:'More',
        tabBarIcon: ({tintColor}) => <Icon name="ios-more-outline" size={30} color={tintColor}/>,
    }
  },


}, {
    lazy: true,
    tabBarPosition: 'bottom',
    initialRouteName: 'Setting',
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
