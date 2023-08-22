import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'

const Instructions = () => {
  return (
    <View style={Styles.container}>
        <View style={Styles.mainView} >
            <Text style={Styles.text}>Watch our youtube video to get clarity about how game works</Text>
        </View>
        <View style={{ padding: 15,marginTop:30 }}>
                <Pressable style={{ backgroundColor: '#FE0000', padding: 15, borderRadius: 5, }} android_ripple={{ color: 'white' }}>
                    <Text style={Styles.textone}>WATCH YOU TUBE VIDEO</Text>
                </Pressable>
            </View>
    </View>
  )
}

export default Instructions

const Styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,

    },
    mainView:{
        backgroundColor:'white',
        padding:10,
        textAlign:'center',
        marginTop:150,
    },
    text:{
        fontFamily: 'Poppins',
fontStyle: 'normal',
fontWeight: '800',
fontSize: 20,
lineheight: 18,
color: '#000000',

    },
    textone: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
    }
})