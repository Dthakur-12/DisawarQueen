import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { moderateVerticalScale } from 'react-native-size-matters'
import TextInputWithLabel from './ReusableComponents/TextInputWithLabel';
import ButtonComponent from './ReusableComponents/ButtonComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userLogin } from './Api/Api';
const LoginNew = ({navigation}) => {
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [isVisible, setVisible] = useState(true);

    const OnLoginHandler=()=>{
        // console.log("Email",Email);
        // console.log("Password",Password);
        let UserEmail=Email;
        let UserPassword=Password;
        console.log(UserEmail,UserPassword);
        userLogin(UserEmail,UserPassword).then((response)=>{
            console.log(response);
            if(response.data.error){
                alert(response.data.userMessage);
        
              }else {
                
                // alert(response.data.userMessage);
                console.log("Msg",response.data);
                console.log("Msg",response.data.data);
                AsyncStorage.setItem('User',JSON.stringify(response.data.data.user));
                AsyncStorage.setItem('Token',response.data.data.token);
                navigation.replace('Welcome');
              }
        }).catch((err)=>{
            console.log(err);
        })
    
    

    }
    return (

        <View style={styles.Container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.welcome}>Welcome Back</Text>
                <Text style={styles.welcometwo}>Login to continue</Text>
            </View>
            {/* <Text style={styles.welcometwo}>Email Address</Text> */}
            <View style={{ paddingHorizontal: moderateScale(24), paddingVertical: moderateVerticalScale(30) }}>
                <TextInputWithLabel
                    label="Email Address"
                    placeholder='Enter your Email..'
                    placeholderTextColor='#826F6F'
                    keyboardType='email-address'
                    onchangeText={(Email)=>setEmail(Email)}
                />
                <TextInputWithLabel
                    label="Password"
                    placeholder='Enter your Password..'
                    placeholderTextColor='#826F6F'
                    secureTextEntry={isVisible}
                    rightIcon='true'
                    onPressRight={() => setVisible(!isVisible)}
                    onchangeText={(Password)=>setPassword(Password)}
                />
                <TouchableOpacity activeOpacity={0.7} style={{ alignSelf: 'flex-end' }}>
                    <Text style={styles.frpassword}>Forgot Password ?</Text>
                </TouchableOpacity>
                <View style={{ marginTop: verticalScale(30) }}>
                    <ButtonComponent onPress={OnLoginHandler}
                        btnText={'LOGIN'} />
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:moderateVerticalScale(30)}}>
                    <Text style={{color:"#000",fontSize:scale(13),fontWeight:'500'}}>New member?</Text>
                    <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('SignUp')}>
                        <Text style={{color:"#FE0000",fontSize:scale(13),fontWeight:'500'}}>SIGNUP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    )
}

export default LoginNew

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFFF'
    },
    welcome: {
        // fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: scale('20'),
        lineHeight: 27,
        color: '#000000'
    },
    welcometwo: {
        // fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: scale('14'),
        lineHeight: 24,
        color: '#826F6F',
        marginTop: verticalScale(10),

    },
    frpassword: {
        // fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: scale(12),
        lineHeight: 15,
        color: '#0D31EF',
        // marginVertical:verticalScale(5),

    }


})