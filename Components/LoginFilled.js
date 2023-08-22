import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginFilled = () => {
    return (
        <View style={Styles.Container}>
            <View style={Styles.main}>
                <View style={Styles.maintext}>
                    <Text style={Styles.textone}>Welcome Back</Text>
                    <Text style={Styles.texttwo}>Login to continue</Text>
                </View>
                <View style={{ padding: 20, paddingTop: 10 }}>
                    <TextInput placeholder='9871279995' style={Styles.input} />
                    <TextInput placeholder='Enter OTP' style={Styles.input} />
                    <Text style={Styles.forgettext}>Resend OTP</Text>
                    <View style={{ backgroundColor: "#FE0000", borderRadius: 5, marginTop: 40 }}>
                        <TouchableOpacity>
                            <Text style={{ alignSelf: 'center', color: 'white', padding: 15, fontSize: 15 }}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                        <Text style={Styles.stext}>New member? </Text>
                        <Text style={{ color: 'red' }}>SIGNUP</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LoginFilled

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },
    textone: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 25,
        color: '#000000',
    },
    texttwo: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 18,
        color: '#826F6F',
    },
    input: {
        elevation: 1,
        padding: 20,
    },
    main: {
        padding: 10,

    },
    maintext: {
        alignItems: 'center',
        marginTop: 200
    },
    forgettext: {
        alignSelf: 'flex-end',
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 13,
        color: '#0D31EF'
    },
    stext: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 15,
        color: '#000000',
    }

})