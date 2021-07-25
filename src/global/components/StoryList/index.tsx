import React from 'react';
import {  FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import ColorsMethod from '../../colors/ColorsMethod';
import Story from './Story';
import { Button } from 'react-native-paper';
const data = [
  {
    id: 1,
    image:
      'https://th.bing.com/th/id/OIP.WC5DOf4vj9ScWJpynhqbRwAAAA?w=200&h=301&c=7&o=5&dpr=1.5&pid=1.7',
    name: 'piyas',
  },
  {
    id: 2,
    image:
      'https://th.bing.com/th/id/OIP.QIdj1oSlD0NxACSlPfGGtQHaHa?w=188&h=188&c=7&o=5&dpr=1.5&pid=1.7',
    name: 'Reyad',
  },
  {
    id: 3,
    image:
      'https://th.bing.com/th/id/OIP.dFXxQfgFF56Lh6ChVBZ1MwHaNH?w=187&h=332&c=7&o=5&dpr=1.5&pid=1.7',
    name: 'Anushka',
  },
  {
    id: 4,
    image:
      'https://th.bing.com/th/id/OIP.L9jh4BnboewKr8N0Gxm6HgHaNt?w=183&h=340&c=7&o=5&dpr=1.5&pid=1.7',
    name: 'oria',
  },
  {
    id: 5,
    image:
      'https://th.bing.com/th/id/OIP.XQZHL6XeOmoRK3_hqm4BoQHaKe?w=200&h=283&c=7&o=5&dpr=1.5&pid=1.7',
    name: 'megh',
  },
  {
    id: 6,
    image:
      'https://th.bing.com/th/id/OIP.WC5DOf4vj9ScWJpynhqbRwAAAA?w=200&h=301&c=7&o=5&dpr=1.5&pid=1.7',
    name: 'Hera',
  },
  {
    id: 7,
    image:
      'https://th.bing.com/th/id/OIP.WC5DOf4vj9ScWJpynhqbRwAAAA?w=200&h=301&c=7&o=5&dpr=1.5&pid=1.7',
    name: 'Anuska',
  },
];

const StoryList = () => {
  const Theme = useSelector(state => state.Theme.theme);
  const {colors, background} = ColorsMethod(Theme);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Story item={item} />}
        ListHeaderComponent={
          <View style={{...styles.main, backgroundColor: background.bgWhite}}>
            <Image style={styles.image} source={{uri: data[4].image}} />
            <Button  >Add Story</Button>
             
          </View>
        }
        keyExtractor={(item:any)=>item.id}
        horizontal
         
      />
      <View style={{margin:10, backgroundColor:background.bgLight}}>
      <Button mode="outlined" color={colors.textSecondary}    >See More sotries</Button>
      </View>
    </View>
  );
};

export default StoryList;

const styles = StyleSheet.create({
  main: {
    padding: 10,
    elevation: 2,
    margin: 10,
    borderRadius: 5,
    alignItems:'center'
  },
  image: {width: 80, height: 130, borderRadius: 10},
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
