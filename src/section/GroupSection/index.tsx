import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import GroupHeader from '../../global/components/GroupHeader/GroupHeader'

const GroupSection = () => {
    return (
        <View>
            <FlatList
             data={data}
            //  ListHeaderComponent={()=><GroupHeader/>}
             renderItem ={({items}:any)=><View><Text>Hello</Text></View>}

            
            />
        </View>
    )
}

export default GroupSection

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
    },
  ];