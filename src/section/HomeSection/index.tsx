import React  from 'react'
import {  StyleSheet,   View } from 'react-native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import HomeScreen from './HomeScreen/index';
import CreatePostScreen from './CreatePostScreen/index';
import StoryScreen from './StoryScreen/index';
import FriendsScreen from '../FriendsSection/FriendsScreen';
import AllFriendsScreen from '../FriendsSection/AllFriendsScreen';
import SuggestionScreen from '../FriendsSection/SuggestionScreen';

const Stack = createStackNavigator();
const HomeSection = () => {

   
    return (
        <Stack.Navigator 
        headerMode="none"
        initialRouteName="HomeScreen"
        >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
        <Stack.Screen name="StoryScreen" component={StoryScreen} />
        <Stack.Screen name="FriendsScreen" component={FriendsScreen} />
      <Stack.Screen name="AllFriendsScreen" component={AllFriendsScreen} />
      <Stack.Screen name="SuggestionScreen" component={SuggestionScreen} />
      </Stack.Navigator>
    )
}

export default HomeSection

const styles = StyleSheet.create({})
