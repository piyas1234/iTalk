import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  Avatar, Card, IconButton } from 'react-native-paper';
const NotificationList = ({item, colors}:any) => {


    return (
        <View>
           <Card.Title
             titleStyle={{color: colors.textDark,fontSize:16}}
             subtitleStyle={{color: colors.textDark}}
            title={item.name}
            subtitle={`${item.name} talukder update his profile pic`}
            left={(props) => <Avatar.Image  size={50} source={{uri:item.image}} />}
             
            right={(props) => <IconButton {...props} icon="bell-alert" color={colors.textDark} onPress={() => {}} />}
        />
        </View>
    )
}

export default NotificationList

const styles = StyleSheet.create({})
