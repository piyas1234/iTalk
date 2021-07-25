import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import NavBar from '../global/NavBar/NavBar';
import Search from './Search';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
  
};




const Main = () => {
  return (
    <PaperProvider theme={theme} >
        <Search/>
       <NavBar/>
    </PaperProvider>
  );
};

export default Main;

const styles = StyleSheet.create({});
