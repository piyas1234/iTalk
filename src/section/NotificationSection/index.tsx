import React from 'react'
import { TouchableOpacity } from 'react-native';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import ColorsMethod from './../../global/colors/ColorsMethod';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import NotificationList from '../../global/components/NotificationList';

const NotificationSection = () => {
    const Theme = useSelector(state => state.Theme.theme)
    const {colors, background} = ColorsMethod(Theme)
    return (
        <View>
            <FlatList
             data = {data}
             ListHeaderComponent={<View style={{flexDirection:'row',justifyContent:'space-between', margin:10}}>
             <Text style={{fontSize:24, fontWeight:'bold',color:colors.textDark  }}>Notification</Text>
             <TouchableOpacity>
                <FontAwesome  color={colors.textDark} size={25} name="search" />
             </TouchableOpacity>
             </View>}
             renderItem={({item})=><NotificationList colors={colors} item={item} />}
            
            />
        </View>
    )
}

export default NotificationSection

const styles = StyleSheet.create({})




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
    },{
      id: 8,
      image:
        'https://th.bing.com/th/id/OIP.WC5DOf4vj9ScWJpynhqbRwAAAA?w=200&h=301&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'piyas',
    },
    {
      id: 9,
      image:
        'https://th.bing.com/th/id/OIP.QIdj1oSlD0NxACSlPfGGtQHaHa?w=188&h=188&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'Reyad',
    },
    {
      id: 10,
      image:
        'https://th.bing.com/th/id/OIP.dFXxQfgFF56Lh6ChVBZ1MwHaNH?w=187&h=332&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'Anushka',
    },
    {
      id: 11,
      image:
        'https://th.bing.com/th/id/OIP.L9jh4BnboewKr8N0Gxm6HgHaNt?w=183&h=340&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'oria',
    },
    {
      id: 12,
      image:
        'https://th.bing.com/th/id/OIP.XQZHL6XeOmoRK3_hqm4BoQHaKe?w=200&h=283&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'megh',
    },
    {
      id: 13,
      image:
        'https://th.bing.com/th/id/OIP.WC5DOf4vj9ScWJpynhqbRwAAAA?w=200&h=301&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'Hera',
    },
    {
      id: 14,
      image:
        'https://th.bing.com/th/id/OIP.WC5DOf4vj9ScWJpynhqbRwAAAA?w=200&h=301&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'Anuska',
    },
  ];