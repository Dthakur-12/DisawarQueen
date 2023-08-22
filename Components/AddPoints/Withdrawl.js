import { View, Text,StyleSheet,Image,TextInput,Pressable } from 'react-native'
import React from 'react'

const Withdrawl = () => {
  return (
    <View style={Styles.Container}>
      <Text style={Styles.maintext}>Please Enter Bank Details</Text>
    <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#ccc', borderRadius: 10,marginVertical:10 }}>
                <Image source={require('../../assets/staricon.png')} style={{marginHorizontal:10}} />
                <TextInput style={Styles.textinput} placeholderTextColor={'gray'} placeholder='Account Holder Name' />
            </View>
            <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#ccc', borderRadius: 10,marginVertical:10 }}>
                <Image source={require('../../assets/staricon.png')} style={{marginHorizontal:10}} />
                <TextInput style={Styles.textinput} placeholderTextColor={'gray'} placeholder='Account Number' keyboardType='decimal-pad' />
            </View>
            <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#ccc', borderRadius: 10,marginVertical:10 }}>
                <Image source={require('../../assets/staricon.png')} style={{marginHorizontal:10}} />
                <TextInput style={Styles.textinput} placeholderTextColor={'gray'} placeholder='Ifsc Code' />
            </View>
            <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#ccc', borderRadius: 10,marginVertical:10 }}>
                <Image source={require('../../assets/staricon.png')} style={{marginHorizontal:10}} />
                <TextInput style={Styles.textinput}placeholderTextColor={'gray'} placeholder='Branch City Name' />
            </View>
            <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#ccc', borderRadius: 10,marginVertical:10 }}>
                <Image source={require('../../assets/staricon.png')} style={{marginHorizontal:10}} />
                <TextInput style={Styles.textinput} placeholderTextColor={'gray'}  placeholder='Bank Pin Code' keyboardType='decimal-pad' />
            </View>
            <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#ccc', borderRadius: 10,marginVertical:10 }}>
                <Image source={require('../../assets/staricon.png')} style={{marginHorizontal:10}} />
                <TextInput style={Styles.textinput} placeholderTextColor={'gray'} placeholder='Mobile Number for OTP' keyboardType='decimal-pad' />
            </View>
            <View style={{marginVertical:10 }}>
            <Pressable style={{ backgroundColor: '#FE0000', padding: 15, borderRadius: 5, }} android_ripple={{ color: 'white' }}>
                    <Text style={Styles.textbtn}>SAVE</Text>
                </Pressable>
            </View>
    </View>
  )
}

export default Withdrawl

const Styles = StyleSheet.create({
    Container:{
        flex: 1,
        padding:10
    },
    maintext:{
fontFamily: 'Poppins',
fontStyle: 'Medium',
fontSize: 18,
color:'#000000',
padding:10
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