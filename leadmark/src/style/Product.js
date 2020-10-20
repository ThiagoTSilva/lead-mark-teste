import { StyleSheet } from 'react-native' 

export default StyleSheet.create({
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
        flex: 0.8,
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
    },
    icon: {
        width: 24,
        height: 24,
      },

})