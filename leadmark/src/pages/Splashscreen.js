import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import logo from '../assets/img/logo.png'
import style from '../style/Splashscreen'

export default function Splashscreen({ navigation }){

    function handleLogin(){
        navigation.navigate('Login')
    }

    setTimeout(() => { handleLogin({timePassed: true}) }, 1000)

    return(
    <View style={style.container}>
        <Image source={logo}/>
    </View>
    )
}