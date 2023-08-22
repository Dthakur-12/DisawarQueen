import React from 'react'
import { useEffect } from 'react'
import { View, Text, StyleSheet, Image,StatusBar } from 'react-native'


const SplashScreenone = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('SplashTwo')
        },4000)
    })
    return (
        <View style={Styles.Container}>
            {/* <StatusBar hidden={true}/> */}
            <View style={Styles.Logostyle}>
                <Image source={require('../../assets/logo.png')} />
            </View>
        </View>
    )
}

export default SplashScreenone

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "black",
    },
    Logostyle:
    {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }

})