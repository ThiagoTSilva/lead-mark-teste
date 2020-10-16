import React from 'react'
import {  KeyboardAvoidingView,
          View,
          Text,
          Image, 
          StyleSheet, 
          TextInput , 
          TouchableOpacity,
          Platform } from 'react-native'
import logo from '../assets/img/logo.png'

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

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#2c2c2c',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    }, 

    input:{
        height: 46,
        alignSelf:'stretch',
        backgroundColor: '#808080',
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 20,
        marginTop: 10,
        paddingHorizontal: 15
    },

    button:{
        height: 46,
        alignSelf:'stretch',
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: '#087761',
        justifyContent:'center',
        alignItems:'center',

    },

    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },

     image:{
         marginBottom: 20
     }
})