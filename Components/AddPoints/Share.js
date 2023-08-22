import React, { useState } from "react";
import CheckBox from '@react-native-community/checkbox';
import { View, Text, StyleSheet, Image, TextInput,Pressable } from 'react-native'

const Share = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={Styles.Container}>

            <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#ccc', borderRadius: 10,marginVertical:10 }}>
                <Image source={require('../../assets/staricon.png')} />
                <TextInput style={Styles.textinput} placeholderTextColor='gray' placeholder='Points to Share' keyboardType='decimal-pad' />
            </View>
            <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#ccc', borderRadius: 10,marginVertical:10  }}>
                <Image source={require('../../assets/call.png')} />
                <TextInput style={Styles.textinput} placeholderTextColor='gray' placeholder='Receiver Phone Number' keyboardType='decimal-pad' />
            </View>
            <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#ccc', borderRadius: 10,marginVertical:10  }}>
                <Image source={require('../../assets/man.png')} />
                <TextInput style={Styles.textinput} placeholderTextColor='gray' placeholder='Receiver Name' keyboardType='decimal-pad' />
            </View>
            <View style={Styles.checkboxContainer}>
                <CheckBox style={Styles.checkbox}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                <Text style={Styles.label}>I need to share points to above contact.</Text>
            </View>
            <View style={{marginVertical:10 }}>
            <Pressable style={{ backgroundColor: '#FE0000', padding: 15, borderRadius: 5, }} android_ripple={{ color: 'white' }}>
                    <Text style={Styles.textbtn}>SHARE</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Share

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
        justifyContent:'center'
    },
    textinput: {
        // textAlign: 'center',
        fontSize: 15,
        padding: 18,
        color: 'black',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 10,
        fontSize: 12,
        alignSelf: "center",
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