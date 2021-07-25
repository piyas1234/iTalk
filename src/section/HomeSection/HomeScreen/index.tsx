import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChatList from '../../../global/components/ChatList';
import CreatePost from '../../../global/components/CreatePost';
import PostList from '../../../global/components/PostsList';
import StoryList from '../../../global/components/StoryList';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <CreatePost />
        <ChatList />
        <StoryList />
        <PostList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
