import React,{ useEffect ,useNavigation } from 'react'
import OtpInput from '../OtpInput'
import { View, Text, StyleSheet, Image, StatusBar, ImageBackground } from 'react-native'

const SplashScreenthree = ({navigation}) => {
   
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('LoginNew');
        }, 4000)
    },[])
    return (

        <View style={Styles.Container}>
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            {/* <StatusBar hidden={true}/>  */}
                {/* <ImageBackground source={require('../../assets/gif/refertwo.gif')} resizeMode='cover' style={Styles.image}> */}
            <Image source={require('../../assets/gif/refertwo.gif')}   style={Styles.image}/>  
                <Text style={Styles.textone}>Refer & Earn</Text>
                </View>

            {/* </ImageBackground> */}

        </View>

    )
}

export default SplashScreenthree

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",  
         backgroundColor:'white',  
    },
    textone: {
        fontFamily: 'Poppins',
        fontStyle: 'italic',
        fontWeight: '800',
        fontSize: 22,
        color: 'black',
        // alignSelf: 'center',
        // marginTop:600,
       
        // alignItems:'center',
        // textAlignVertical: 'center',
        // justifyContent: 'center',
        // flex:1,
    },
    image:{
        height:200,
        width:200,    
    }


})