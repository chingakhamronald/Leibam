import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

const BaseNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BaseNavigation;
