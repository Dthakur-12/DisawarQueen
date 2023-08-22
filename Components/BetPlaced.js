import React,{ useEffect } from 'react'
import { View, Text, StyleSheet,Image,ImageBackground } from 'react-native'


const BetPlaced = ({navigation,route}) => {
const {Wallet,otherParams}=route.params;

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')},5000)
    })
    return (
        <View style={Styles.Container}>    
         <ImageBackground source={require('../assets/gif/Welcome.gif')} style={Styles.image} >      
          <View style={{flex:5,justifyContent:'center',alignItems:'center' }}>  
            <Text style={Styles.textone}>Bet Placed Successfully </Text>   
            <Text style={Styles.textone}>{`Available Balance:{${Wallet}}`}</Text>   
            </View>
            </ImageBackground>    
        </View>
    )
}

export default BetPlaced

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",  
         backgroundColor:'black',  
    },
    textone: {
fontFamily: 'Poppins',
fontStyle: 'italic',
fontWeight: '800',
fontSize: 20,
color: '#FE0000',
// alignSelf:'center',
  
},
image:{
    flex:1,
    backgroundColor:"black",
}
  

})