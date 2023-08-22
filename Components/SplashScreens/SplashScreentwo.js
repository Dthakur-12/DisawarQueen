import React from 'react'
import { useEffect } from 'react'
import { View, Text, StyleSheet,Image,StatusBar,ImageBackground } from 'react-native'


const SplashScreentwo = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('SplashThree')
        },4000)
    })
    return (
        <View style={Styles.Container}> 
        <StatusBar/>    
            <Image source={require('../../assets/gif/trophy.gif')}  resizeMode='cover' style={Styles.image}/>  
            <Text style={Styles.textone}>Play and Win</Text>   
           
        </View>
    )
}

export default SplashScreentwo

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center", 
        backgroundColor:'white', 
        // backgroundColor:'black',  
    },
    textone: {
    fontFamily: 'Poppins',
    fontStyle: 'italic',
    fontWeight: '800',
    fontSize: 22,
    color: '#000000',
    marginTop: 15,
},
image:{
    height:200,
    width:200,    
}

})