import React from 'react'
import {  View,
          Text,
          Image, 
          StyleSheet, 
          TextInput , 
          TouchableOpacity} from 'react-native'
import logo from '../assets/logo-mini.png'

export default function ListProduct(){
    return(
        <View style={style.container}>
            <View>
                <Image source={logo}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#2c2c2c',
        padding: 30
    }, 
})