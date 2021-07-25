import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CardComponent from './CardComponent'

const PostList = () => {


    return (
        <View>
             <FlatList
             data = {data}
             renderItem = {({item})=><CardComponent item={item} /> }
             keyExtractor={(item:any)=>item.id}
             />
        </View>
    )
}

export default PostList

const styles = StyleSheet.create({})



const data = [
    {
      id: 1,
      image:
        'https://th.bing.com/th/id/OIP.WC5DOf4vj9ScWJpynhqbRwAAAA?w=200&h=301&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'piyas',
      description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    },
    {
      id: 2,
      image:
        'https://th.bing.com/th/id/OIP.QIdj1oSlD0NxACSlPfGGtQHaHa?w=188&h=188&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'Reyad',
      description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    },
    {
      id: 3,
      image:
        'https://th.bing.com/th/id/OIP.dFXxQfgFF56Lh6ChVBZ1MwHaNH?w=187&h=332&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'Anushka',
      description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    },
    {
      id: 4,
      image:
        'https://th.bing.com/th/id/OIP.L9jh4BnboewKr8N0Gxm6HgHaNt?w=183&h=340&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'oria',
      description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    },
    {
      id: 5,
      image:
        'https://th.bing.com/th/id/OIP.XQZHL6XeOmoRK3_hqm4BoQHaKe?w=200&h=283&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'megh',
      description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    },
    {
      id: 6,
      image:
        'https://th.bing.com/th/id/OIP.WC5DOf4vj9ScWJpynhqbRwAAAA?w=200&h=301&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'Hera',
      description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    },
    {
      id: 7,
      image:
        'https://th.bing.com/th/id/OIP.WC5DOf4vj9ScWJpynhqbRwAAAA?w=200&h=301&c=7&o=5&dpr=1.5&pid=1.7',
      name: 'Anuska',
      description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    },
  ];