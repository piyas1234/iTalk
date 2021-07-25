import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import { useSelector } from 'react-redux';
import ColorsMethod from './../../colors/ColorsMethod';
 
const Story = ({item}:any) => {
    const Theme = useSelector(state => state.Theme.theme)
    const {colors , background} = ColorsMethod(Theme)
    return (
        <View style={{...styles.main, backgroundColor:background.bgWhite}}>
            <Image style={styles.image} source={{uri:item.image}} />
            <Text style={{...styles.title, color:colors.textDark}} >{item.name}</Text>
        </View>
    )
}

export default Story

const styles = StyleSheet.create({

    main:{
        padding:10,
        elevation:2,
        margin:10,
        borderRadius:5
    },
    image:{width:80, height:130,   borderRadius:10},
    title:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
         
    }

})
