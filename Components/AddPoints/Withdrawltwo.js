import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable,ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler';

const Withdrawltwo = () => {
    const [toggleCheckBoxone, setToggleCheckBoxone] = useState(false)
    const [toggleCheckBoxtwo, setToggleCheckBoxtwo] = useState(false)
    const [toggleCheckBoxthree, setToggleCheckBoxthree] = useState(false)
    const [toggleCheckBoxfour, setToggleCheckBoxfour] = useState(false)
    return (
        <View style={Styles.container}>
            <ScrollView>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Image source={require('../../assets/atm.png')} />
            </View>
            <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#ccc', borderRadius: 5, marginVertical: 10 }}>
                <Image source={require('../../assets/staricon.png')} style={{ marginHorizontal: 10 }} />
                <TextInput style={Styles.textinput}placeholderTextColor={'gray'} placeholder='Points' keyboardType='decimal-pad' />
            </View>
            <View style={{ paddingLeft: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <Image source={require('../../assets/home.png')} style={{ marginHorizontal: 10 }} />
                <Text style={{ fontFamily: 'Poppins', fontSize: 15, fontWeight: '800', marginLeft: 10 }}>Select withdrawal type</Text>
            </View>
            <View style={{ paddingLeft: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <CheckBox
                    disabled={false}
                   
                   

                    value={toggleCheckBoxone}
                    onValueChange={(newValue) => setToggleCheckBoxone(newValue)}
                    style={{borderWidth:2,borderColor:'red'}}
                    boxType={'circle'}
                   />
                <Image source={require('../../assets/phonepay.png')} style={{ marginHorizontal: 10 }} />
            </View>
            <View style={{ paddingLeft: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBoxtwo}
                    onValueChange={(newValue) => setToggleCheckBoxtwo(newValue)}
                    style={{backgroundColor:'white',}}
                    boxType={'circle'} />
                <Image source={require('../../assets/paytm.png')} style={{ marginHorizontal: 10 }} />
            </View>
            <View style={{ paddingLeft: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBoxthree}
                    onValueChange={(newValue) => setToggleCheckBoxthree(newValue)}
                    style={{backgroundColor:'white',}}
                    boxType={'circle'} />
                <Image source={require('../../assets/gpay.png')} style={{ marginHorizontal: 10 }} />
            </View>
            <View style={{ paddingLeft: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBoxfour}
                    onValueChange={(newValue) => setToggleCheckBoxfour(newValue)}
                    style={{backgroundColor:'white',}}
                    boxType={'circle'} />
                <Image source={require('../../assets/visa.png')} />
            </View>
            <View style={{ marginVertical: 10 }}>
                <Pressable style={{ backgroundColor: '#FE0000', padding: 15, borderRadius: 5, }} android_ripple={{ color: 'white' }}>
                    <Text style={Styles.textbtn}>WITHDRAWAL NOW</Text>
                </Pressable>
            </View>
            <View>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default Withdrawltwo

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor:'white',
    },
    textinput: {
        padding: 15,
        color:'black',
    },
    textbtn: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
    },
})