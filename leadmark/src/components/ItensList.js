import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import style from '../style/ItensList'

export default function ItensList({ data }) {

    return(
        <TouchableOpacity style={style.card}>
            <View>
                <Icon name="user-circle" size={50} style={style.icon}/>
            </View>
            <View>
                <Text style={style.textdescricao}>{data.ds_produto} </Text>
                <Text style={style.textdescricao}>R$:{ data.valor_compra}</Text>
                <Text style={style.texttipodescricao}>{data.tipo_descricao}</Text>
                <Text style={style.texttipodescricao} numberOfLines={1}>DDD {data.nu_ddd} - {data.localidade} </Text>
            </View>
            <View style={style.iconclock}>
                <Icon name="clock-o" />
            </View>
        </TouchableOpacity>
    )
}
