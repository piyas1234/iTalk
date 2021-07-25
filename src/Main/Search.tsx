import React, {useEffect, useState} from 'react';
import {  StyleSheet, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import ColorsMethod from './../global/colors/ColorsMethod';
import {useSelector} from 'react-redux';
import {IconButton, Colors} from 'react-native-paper';



const Search = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [search, setSearch] = useState(false);
  const onChangeSearch = query => setSearchQuery(query);
  const Theme = useSelector(state => state.Theme.theme);
  const {colors, background} = ColorsMethod(Theme);

 
  return search === false ? (
    <View
      style={{
        backgroundColor: background.bgWhite,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{...styles.Logo, color: colors.textSecondary}}>
        ITalk
      </Text>
      
      <IconButton
        icon="message"
        color={colors.textSecondary}
        size={28}
        
      />
       <IconButton
         
        icon="account-search"
        color={colors.textSecondary}
        size={28}
        onPress={() => setSearch(true)}
      />
    </View>
  )
  
  
  :
  
  
  (
    <View style={{...styles.SearchMain, backgroundColor:background.bgWhite}}>
     <IconButton
      icon="keyboard-backspace"
      color={colors.textSecondary}
      size={28}
      onPress={() => setSearch(false)}
      />
        
    <Searchbar
      placeholder="Search..."
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{backgroundColor: background.bgLight, width:'80%',borderRadius:20}}
      iconColor={background.bgDark}
      placeholderTextColor={background.bgDark}
      
    />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  Logo: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    width:'70%',
    padding: 5,
    letterSpacing: 2,
  },

  SearchMain:{
      flexDirection:'row',
      
  }
});
