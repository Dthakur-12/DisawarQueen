import { View, Text, StyleSheet, Button, Pressable,Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React from 'react'

const Cardone = () => {
  return (
    <View style={Styles.Container}>
      <Text style={Styles.heading}>in-app upi rewards</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15,paddingHorizontal:10 }}>
        <View style={Styles.card}>
          <Text style={Styles.textone}>Recharge with or above</Text>
          <Text style={Styles.texttwo}>Rs.0</Text>
          <Text style={Styles.textone}>and get</Text>
          <Text style={Styles.texttwo}>0% Free</Text>
        </View>
        <View style={Styles.card}>  
        <LinearGradient style={{borderRadius:10}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}   colors={['#EE0A79', '#FF6900',]}>
          <Text style={Styles.textthree}>Recharge with or above</Text>
          <Text style={Styles.textfour}>Rs.0</Text>
          <Text style={Styles.textthree}>and get</Text>
          <Text style={Styles.textfour}>0% Free</Text>
          </LinearGradient>  
        </View>
      </View>
     
    </View>
  )
}

export default Cardone
const Styles = StyleSheet.create({
  heading: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#000000',
    marginLeft:10
  },
  textone: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 11,
    color: '#000000',
    alignSelf: 'center',
    padding:10,
  },
  texttwo: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    color: 'red',
    alignSelf: 'center',
    // paddingBottom:10,
  },
  card: {
    // borderWidth: 1,
    // borderColor:'white',
    elevation: 13,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    margin:5,
    // paddingVertical:5,
  },
  textthree: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 11,
    color: 'white',
    alignSelf: 'center',
    padding: 10,
  },
  textfour: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    paddingBottom:5,
  },
 
})