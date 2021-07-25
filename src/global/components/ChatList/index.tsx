import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { colors } from 'react-native-elements';
import { Avatar } from 'react-native-paper';
 
const data = [
    {
        id:1,
        image:'https://th.bing.com/th/id/OIP.WC5DOf4vj9ScWJpynhqbRwAAAA?w=200&h=301&c=7&o=5&dpr=1.5&pid=1.7'
    }, {
        id:2,
        image:'https://th.bing.com/th/id/OIP.QIdj1oSlD0NxACSlPfGGtQHaHa?w=188&h=188&c=7&o=5&dpr=1.5&pid=1.7'
    }, {
        id:3,
        image:'https://th.bing.com/th/id/OIP.dFXxQfgFF56Lh6ChVBZ1MwHaNH?w=187&h=332&c=7&o=5&dpr=1.5&pid=1.7'
    }, {
        id:4,
        image:'https://th.bing.com/th/id/OIP.L9jh4BnboewKr8N0Gxm6HgHaNt?w=183&h=340&c=7&o=5&dpr=1.5&pid=1.7'
    }, {
        id:5,
        image:'https://th.bing.com/th/id/OIP.XQZHL6XeOmoRK3_hqm4BoQHaKe?w=200&h=283&c=7&o=5&dpr=1.5&pid=1.7'
    }, {
        id:6,
        image:'https://th.bing.com/th/id/OIP.WC5DOf4vj9ScWJpynhqbRwAAAA?w=200&h=301&c=7&o=5&dpr=1.5&pid=1.7'
    }, {
        id:7,
        image:'https://th.bing.com/th/id/OIP.WC5DOf4vj9ScWJpynhqbRwAAAA?w=200&h=301&c=7&o=5&dpr=1.5&pid=1.7'
    },
]
const ChatList = () => {
    return (
        <View style={{flexDirection:'row',marginVertical:20 , elevation:2, backgroundColor:'white'}}>
            


            <FlatList
            data = {data}
            horizontal
            scrollEnabled 
            renderItem = {({item})=> <Avatar.Image   size={50} style={{margin:15, backgroundColor:colors.grey5 }} source={{uri:item.image}} />  }
            keyExtractor={(item:any)=>item.id}
            />
        </View>
    )
}

export default ChatList

const styles = StyleSheet.create({})
