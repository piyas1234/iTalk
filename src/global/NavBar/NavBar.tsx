import React, {useEffect} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeSection from '../../section/HomeSection';
import FriendsSection from '../../section/FriendsSection';
import GroupSection from './../../section/GroupSection/index';
import NotificationSection from './../../section/NotificationSection/index';
import ProfileSection from './../../section/ProfileSection/index';
import MenuSection from './../../section/MenuSection/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import {useSelector} from 'react-redux';
import ColorsMethod from './../colors/ColorsMethod';

const Tab = createMaterialTopTabNavigator();

const NavBar = () => {
  const scheme = useSelector(state => state.Theme.theme);
  const {colors, background} = ColorsMethod(scheme);
  return (
    <NavigationContainer theme={scheme === 'true' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          pressColor: '#00ffff',
          activeTintColor: colors.textSecondary,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeSection}
          options={{
            tabBarLabel: ({color}) => (
              <Foundation name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Friends"
          component={FriendsSection}
          options={{
            tabBarLabel: ({color}) => (
              <FontAwesome5 name="user-friends" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Grops"
          component={GroupSection}
          options={{
            tabBarLabel: ({color}) => (
              <FontAwesome5 name="users" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileSection}
          options={{
            tabBarLabel: ({color}) => (
              <FontAwesome name="user-circle" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={NotificationSection}
          options={{
            tabBarLabel: ({color}) => (
              <Ionicons name="notifications" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="Menu"
          component={MenuSection}
          options={{
            tabBarLabel: ({color}) => (
              <MaterialCommunityIcons name="menu" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;

const styles = StyleSheet.create({});
