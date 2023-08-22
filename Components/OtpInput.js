import React, { Component,useState,useEffect } from 'react';
import RNOtpVerify from 'react-native-otp-verify';
import { Pressable, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { View, Text, TextInput } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ScrollView } from 'react-native-gesture-handler';
import {userOTP} from './Api/Api'
import {loginUser} from './Api/Api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { moderateVerticalScale } from 'react-native-size-matters'
import ButtonComponent from './ReusableComponents/ButtonComponent';

let Otp;
let token;
let number;
const OtpInput = ({navigation,route}) => {
  const [userNumber, setUserNumber]= useState('');
  const {UserMail,otherParams}=route.params;
  const [Otp,setOtp]=useState('');

  const VerfiyOtpHandler =()=>{
    loginUser(UserMail,Otp).then((response)=>{
      console.log(response);
      console.log(response.data.error);

      if(response.data.error){
        alert(response.data.userMessage);

      }else {
        // alert('OTP verified');
        // console.log("Token",response.data.data.token);
        // console.log("Msg",response.data.userMessage);
        alert(response.data.userMessage);
        // console.log("Msg",response.data.data.user.email);
        AsyncStorage.setItem('User',JSON.stringify(response.data.data.user));
        AsyncStorage.setItem('Token',response.data.data.token);
        navigation.navigate('Welcome');
      }
      // const Token=response.data.data.token;
      // console.log( 'UserToken',Token);
      // const userData=response.data.data.user;
      // console.log('userData',userData); 
      // AsyncStorage.setItem('Token',Token)
      // console.log('Here is the auth token',Token);
      // navigation.replace('SignUp');
    }).catch((error)=>{
      console.log("error",error);
      console.log("error",error.message);
    });
 
 
  }


  
 
  return (
    <View style={{ flex: 1,padding:10, alignContent: 'center', justifyContent: 'center', }}>
      <ScrollView>
        <KeyboardAvoidingView behavior='position'>
        <View style={{marginTop:100}}>
           <View style={{ alignItems: 'center' }}>
            
            {/* <Image source={require('../assets/logo.png')} /> */}
            <Text style={{fontSize:35,fontWeight:'bold',color:"black",}}>Welcome</Text>
          </View> 
{/*          
          <Formik initialValues={{ mobileNumber: '' }} onSubmit={values => {
            const mobileNumber=values.mobileNumber;
            setUserNumber(mobileNumber);
            userOTP(mobileNumber).then((response)=>{
              alert("OTP send successfully!!")
       
              console.log(response);
              

               token=response.data.token;
              console.log(token); 
               Otp=response.data.data;
              console.log(Otp);
               number=response.data.number;
              console.log(number);

            }).catch((error)=>{
              console.log(error);
            });
            
            
          }}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={{ padding: 20, paddingTop: 10 }}>
                <TextInput placeholder='Enter Your Phone Number...' placeholderTextColor={'gray'} keyboardType='decimal-pad' maxLength={10}
                  style={styles.input} onChangeText={handleChange('mobileNumber')}
                  onBlur={handleBlur('mobileNumber')}
                  value={values.mobileNumber}
                  label='Phone Number'
                  mode='outlined'
                   />
                <View style={{ backgroundColor: "#FE0000", borderRadius: 5, marginTop: 40 }}>
                  <Pressable onPress={handleSubmit} android_ripple={{color:'white'}}>
                    <Text style={{ alignSelf: 'center', color: 'white', padding: 15, fontSize: 15 }}>Send OTP</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </Formik> */}

          <View style={{ paddingLeft: 10, paddingTop: 50 }}>
            <Text style={styles.textstyle}>Enter OTP Send to your Email... <Text style={{color:'red',fontWeight:'700'}}>{userNumber}</Text>  </Text>
            <Text style={styles.email}>{JSON.stringify(UserMail)} <Text style={{color:'red',fontWeight:'700'}}>{userNumber}</Text>  </Text>
          
          </View>
          <View style={{alignItems:'flex-start'}}>
          <OTPInputView
            style={{ height: 80,width: 100,marginLeft:30}}
            pinCount={4} 
            editable={true}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code => {

              console.log(`Code is ${code}, you are good to go!`)
              setOtp(code);
        
            })}
          />
          </View>
          <Pressable>
              <Text style={{ alignSelf: 'flex-end', color: 'blue', padding: 15, fontSize: 15 }}>Resend OTP</Text>
            </Pressable>
          </View>
          <View>
            <ButtonComponent btnText={'Verify OTP'} onPress={VerfiyOtpHandler}/>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  )
}

export default OtpInput


const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  borderStyleHighLighted: {
    borderColor: "red",
  },

  underlineStyleBase: {
    width: 60,
    height: 75,
    borderWidth: 2,
    borderBottomWidth: 2,
    elevation: 5,
    padding: 10,
    // backgroundColor:'red',
    color: 'red',
    fontSize: 20,
    margin:10,
    borderRadius:5,
  },

  underlineStyleHighLighted: {
    borderColor: "black",
    color: 'red',
    fontSize: 30,
  },
  textstyle: {
    fontSize: scale(15),
    fontWeight: 'bold',
    color:'gray',
    marginVertical:verticalScale(10),
    alignSelf:'center'
  },
  input: {
    // elevation: 1,
    padding: 10,
    fontSize:15,
    color:'black',
    borderRadius:5,
     borderColor:'gray',
     borderWidth:1,
    
  },
  email:{
    alignSelf:'center',
    margin:5,
    color:'red',
    fontSize:scale(12),
    fontWeight:"600",
  }
});
