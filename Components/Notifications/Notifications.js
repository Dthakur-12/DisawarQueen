import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'

const Notifications = ({navigation,route}) => {
// const {Wallet,otherParams}=route.params;
// console.log(Wallet);
  return (
    <ScrollView>
      {/* <Text>{Wallet}</Text> */}
    <View style={StyleSheet.Container}>
      <Text style={Styles.textone}>Notifications</Text>
      <View style={{ padding:20, elevation:2,borderColor:'black',backgroundColor:'white',marginTop:5}}>
        <Text style={Styles.texttwo}>Urgent Message</Text>
        <Text style={Styles.textthree}>Sat     17/09/2022       6:03 PM</Text>
        <Text style={Styles.textthree}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
      </View>
      <View style={{ padding:20,elevation:2,borderColor:'black',backgroundColor:'white',marginTop:5}}>
        <Text style={Styles.texttwo}>Urgent Message</Text>
        <Text style={Styles.textthree}>Sat     17/09/2022       6:03 PM</Text>
        <Text style={Styles.textthree}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
      </View>
      <View style={{ padding:20,elevation:2,borderColor:'black',backgroundColor:'white',marginTop:5}}>
        <Text style={Styles.texttwo}>Urgent Message</Text>
        <Text style={Styles.textthree}>Sat     17/09/2022       6:03 PM</Text>
        <Text style={Styles.textthree}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
      </View>
      <View style={{ padding:20,elevation:2,borderColor:'black',backgroundColor:'white',marginTop:5}}>
        <Text style={Styles.texttwo}>Urgent Message</Text>
        <Text style={Styles.textthree}>Sat     17/09/2022       6:03 PM</Text>
        <Text style={Styles.textthree}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
      </View>
      <View style={{ padding:20,elevation:2,borderColor:'black',backgroundColor:'white',marginTop:5}}>
        <Text style={Styles.texttwo}>Urgent Message</Text>
        <Text style={Styles.textthree}>Sat     17/09/2022       6:03 PM</Text>
        <Text style={Styles.textthree}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
      </View>
    </View>
    </ScrollView>
  )
}

export default Notifications

const Styles= StyleSheet.create({
    Container:{
        flex:1,
     padding:10,
    },
    textone:{
        fontSize:20,
        fontWeight:'bold',
        padding:10,
        color:'black',
    },
texttwo:{
fontfamily: 'Poppins',
fontWeight:'bold',
fontSize: 18,
lineHeight: 18,
color: '#FE0000',
    },
    textthree:{
        fontfamily: 'Poppins',
        fontWeight:'bold',
        fontSize: 15,
        lineHeight: 18,
        margin:5,
        color:'black',
            }

})