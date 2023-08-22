import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const GameRate = () => {
  return (
    <View style={Styles.Container}>
        <View style={{flexDirection:'row', justifyContent:'space-around',marginTop:20}}>
            <Text style={Styles.TextStyleone}>Game Name</Text>
            <Text style={Styles.TextStyleone}>Jodi Rate</Text>
            <Text style={Styles.TextStyleone}>Harup Rate</Text>
        </View>
        <View style={{flex:4,justifyContent:'space-evenly'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between',borderWidth:2,borderColor:'#826F6F',borderRadius:8}}>
                <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                <Text style={Styles.txtstyletwo}>90</Text>
                <Text style={Styles.txtstyletwo}>09</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between',borderWidth:2,borderColor:'#826F6F',borderRadius:8,}}>
                <Text style={Styles.txtstyletwo}>DELHI BAZAR</Text>
                <Text style={Styles.txtstyletwo}>90</Text>
                <Text style={Styles.txtstyletwo}>09</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between',borderWidth:2,borderColor:'#826F6F',borderRadius:8,}}>
                <Text style={Styles.txtstyletwo}>SHREE GANESH</Text>
                <Text style={Styles.txtstyletwo}>90</Text>
                <Text style={Styles.txtstyletwo}>09</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between',borderWidth:2,borderColor:'#826F6F',borderRadius:8,}}>
                <Text style={Styles.txtstyletwo}>FARIDABAD</Text>
                <Text style={Styles.txtstyletwo}>90</Text>
                <Text style={Styles.txtstyletwo}>09</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between',borderWidth:2,borderColor:'#826F6F',borderRadius:8,}}>
                <Text style={Styles.txtstyletwo}>GHAZIABAD</Text>
                <Text style={Styles.txtstyletwo}>90</Text>
                <Text style={Styles.txtstyletwo}>09</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between',borderWidth:2,borderColor:'#826F6F',borderRadius:8,}}>
                <Text style={Styles.txtstyletwo}>GALI</Text>
                <Text style={Styles.txtstyletwo}>90</Text>
                <Text style={Styles.txtstyletwo}>09</Text>
            </View>
        </View>
    </View>
  )
}

export default GameRate

const Styles = StyleSheet.create({
    Container:{
        flex:1,
        padding:10,
    },
    TextStyleone:{
fontFamily: 'Poppins',
fontStyle: 'normal',
fontWeight: '800',
fontSize: 16,
lineheight: 18,
color: '#000000',
    },
    txtstyletwo:{
fontFamily: 'Poppins',
fontStyle: 'normal',
fontWeight: '700',
fontSize: 18,
lineheight: 15,
color: '#826F6F',
padding:10,
    }
})