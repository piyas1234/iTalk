import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Avatar, Button } from 'react-native-paper'

const FriendCard = ({item, colors , background}:any) => {
    
    return (
        <View style={styles.main}>
           <View>
           <Avatar.Image size={80} source={{uri:item.image}} />
           </View>
           <View >
               <Text style={{...styles.title, color:colors.textDark }}> {item.name}</Text>
               <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:5}}>
               <Button mode="contained" labelStyle={{color:'white'}} >Confirm</Button>
               <Button style={{marginLeft:10}} mode="outlined"  color={colors.textDark}>Delete</Button>
               </View>
           </View>

           
        </View>
    )
}

export default FriendCard

const styles = StyleSheet.create({
    main:{
        flexDirection:'row',
        
        margin:10,
        justifyContent:'space-around'
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
    },
    
})
