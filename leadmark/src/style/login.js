import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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