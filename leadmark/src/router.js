import React, { Component } from 'react'
import Image from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/FontAwesome'

import Login from './pages/Login'
import Splashscreen from './pages/Splashscreen'
import List from './pages/List'
import Product from './pages/Product'
import ItensList from './components/ItensList' 



const Drawer = createDrawerNavigator({
    List,
    Product
    },{
    drawerPosition:"right",
    drawerBackgroundColor: '#fff',
    statusBarAnimation:"fade",
    }
)

export default createAppContainer(
    createSwitchNavigator({
        Splashscreen,
        Login,
        ItensList,
        Drawer
    })
    
)