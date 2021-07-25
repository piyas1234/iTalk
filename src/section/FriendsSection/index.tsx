import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Card, IconButton} from 'react-native-paper';
import ColorsMethod from './../../global/colors/ColorsMethod';
import {useSelector} from 'react-redux';
import FriendCard from '../../global/components/FriendsList/FriendCard';

const FriendsSection = () => {
  const navigation = useNavigation();
  const Theme = useSelector(state => state.Theme.theme);
  const {colors, background} = ColorsMethod(Theme);
  return (
    <View>
      <Card.Title
        title="Friends"
        subtitle="total 542"
        left={props => <Avatar.Icon {...props} icon="account-multiple-plus" />}
        right={props => (
          <IconButton
            {...props}
            size={40}
            color={colors.textSecondary}
            icon="cloud-search"
            onPress={() => {}}
          />
        )}
      />

      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <Button
          icon="account-box-multiple"
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Suggestion
        </Button>

        <Button
          icon="account"
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          All Friends
        </Button>
      </View>

      <FlatList
      
      data={data}
      
      renderItem={({item})=> <FriendCard colors={colors} background={background} item={item} /> }
      
      
      />


    </View>
  );
};

export default FriendsSection;

const styles = StyleSheet.create({});


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