import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'
import {  View,
          FlatList,
          Image, 
          StyleSheet,  
          TouchableOpacity} from 'react-native'
import ItensList from '../components/ItensList'

import logo from '../assets/img/logo-mini.png'
import * as data from '../assets/data/list.json'

export default function ListProduct({ navigation }){
        return(
            <View style={style.container}>
                <View style={style.header}>
                    <View>
                        <Image source={logo}/>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <Icon name="navicon" size={40} color="#2c2c2c" /> 
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <FlatList data={data.leads} 
                            renderItem={({item}) => <ItensList data={item}/>}/>
                </View>
            </View>
        )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#dcdcdc',
        padding: 30,
        
    }, 
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
})