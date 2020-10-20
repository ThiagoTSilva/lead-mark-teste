import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'
import {  View,
          FlatList,
          Image,   
          TouchableOpacity} from 'react-native'
import ItensList from '../components/ItensList'

import logo from '../assets/img/logo_mini.png'
import lista from '../assets/icon/address.png'
import * as data from '../assets/data/list.json'
import style from '../style/List'

export default class ListProduct extends Component{

    static navigationOptions = {
        drawerLabel: 'List',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={lista}
            style={[style.icon, { tintColor: tintColor }]}
          />
        ),
      };

      render(){
        return(
            <View style={style.container}>
                <View style={style.header}>
                    <View>
                        <Image source={logo}/>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
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
}

