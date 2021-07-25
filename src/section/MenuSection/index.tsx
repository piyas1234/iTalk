import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { getThemeAction, setThemeAction } from './../../global/Redux/Action/ThemeAction';
 
const MenuSection = () => {

    const dispatch = useDispatch()
    useEffect(() => {
         dispatch(getThemeAction())
    }, [])
    return (
        <View>
           <Button onPress={()=>dispatch(setThemeAction())} title="Change Mode"/>
        </View>
    )
}

export default MenuSection

const styles = StyleSheet.create({})
