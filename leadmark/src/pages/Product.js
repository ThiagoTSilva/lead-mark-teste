import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'
import {  View,
          Text,
          Image, 
          StyleSheet,  
          TouchableOpacity,
          Button} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import logo from '../assets/img/logo-mini.png'
import data from '../assets/data/product.json'

export default function Product({ navigation }){
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
            <View style={style.body}>
                <FontAwesome name="user-circle-o" size={80}/>
                { 
                 data.lead.map((e, i) => 
                    <View key={i} style={style.bodyinfo}> 
                        <View>
                            <Text> { e.dados_empresariais.nome}</Text>
                        </View>
                        <View style={style.clock}>
                            <FontAwesome name="clock-o" size={20}/>
                            <Text> 2 min</Text>
                        </View>
                        <View style={ style.viewbutton}>
                            <TouchableOpacity style={ style.touchbutton} ><Text>{e.tipo.descricao}</Text></TouchableOpacity>
                            <TouchableOpacity style={ style.touchbutton}><Text>{e.vidas}Vidas</Text></TouchableOpacity>
                            <TouchableOpacity style={ style.touchbutton}><Text>CNPJ</Text></TouchableOpacity>
                        </View>
                        {
                                e.telefones.map((c,i)=>
                                <View style={style.info}>
                                    <Text style={style.text}>Informação de Contrato</Text>
                                    <View style={style.textinfo}>
                                        <FontAwesome name="phone"/>
                                        <Text> ({c.ddd.nu_ddd}){c.num_telefone}</Text>
                                    </View>
                                    <View style={style.textinfo}>
                                        <FontAwesome name="vcard"/>
                                        <Text> {e.dados_empresariais.cnpj}</Text>
                                    </View>
                                    <View style={style.textinfo}>
                                        <FontAwesome name="vcard"/>
                                        <Text> {e.dados_empresariais.logradouro}</Text>
                                    </View>
                                </View>

                                )
                            }
                    
                        <TouchableOpacity style={style.button}>
                                <View>
                                    <Text style={style.buttonText}>Comprar</Text>
                                </View>
                        </TouchableOpacity>
                    </View>
              )
                }
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
    button:{
        height:46,
        width:300,
        alignSelf:'stretch',
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#087761',
        justifyContent:'center',
        alignItems:'center',

    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    body:{
        justifyContent:"center",
        alignItems: "center",
        marginTop: 80
    },
    bodyinfo:{
        justifyContent:"center",
        alignItems: "center"
    },
    viewbutton:{
        flexDirection: "row",
        marginTop: 10
    },
    touchbutton:{
        height: 30,
        width: 90,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        marginLeft: 10,
        padding: 5,
        backgroundColor: '#fff'
    },
    info:{
        width: 300,
        marginTop: 20,
        padding: 5,
        backgroundColor: '#fff',
        
    },
    text:{
        fontWeight: "bold",
        fontSize: 20
    },
    clock:{
        flexDirection: "row",      
    },
    textinfo:{
        flexDirection: "row",  
        fontSize: 20,
        marginTop: 10
    }

})