import React from 'react'
import {  KeyboardAvoidingView,
          Text,
          Image,  
          TextInput , 
          TouchableOpacity,
          Platform } from 'react-native'
import logo from '../assets/img/logo.png'
import style from '../style/login'

export default function Login({ navigation}){

    function handleList(){
        navigation.navigate('List')
    }

    return(
    <KeyboardAvoidingView 
        behavior='padding'
        enabled={Platform.OS === 'ios'}
        style={style.container}>

        <Image style={style.image} source={logo}/>
        
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Email'
            placeholderTextColor='#fff'
            style={style.input}
        />

        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Email'
            placeholderTextColor='#fff'
            style={style.input}
        />

        <TouchableOpacity onPress={handleList} style={style.button}>
            <Text style={style.buttonText}>Acessar</Text>
        </TouchableOpacity>

    </KeyboardAvoidingView>
    )
}
