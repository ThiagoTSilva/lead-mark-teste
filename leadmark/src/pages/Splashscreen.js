import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import logo from '../assets/logo.png'

export default function Splashscreen({ navigation }){

    function handleLogin(){
        navigation.navigate('Login')
    }

    setTimeout(() => {handleLogin({timePassed: true})}, 1000)

    return(
    <View style={style.container}>
        <Image source={logo}/>
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#2c2c2c',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
})