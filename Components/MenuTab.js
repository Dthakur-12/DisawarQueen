import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
import React from 'react'

const MenuTab = () => {
    return (
        <View style={Styles.Container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                <Image source={require('../assets/dp.png')} />
                <Text style={Styles.text}>User name</Text>
                <Text style={Styles.text}>8929586287</Text>
            </View>
            <View>
            <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
            </View>
            <View>
                <View style={{ flexDirection: 'row', padding: 30 }}>
                    <Icon name='home' size={30} />
                    <Text style={Styles.Tabtext}>Home</Text>
                </View>
            </View>
        </View>
    )
}

export default MenuTab

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    text: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 18,
        lineHeight: 24,
        color: '#826F6F',
        padding: 5,
    },
    Tabtext: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 21,
        color: '#000000',
    }

})