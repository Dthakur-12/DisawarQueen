import { View, Text,ActivityIndicator } from 'react-native'
import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Form } from 'formik';
import { BallIndicator } from 'react-native-indicators'

const Loading = ({navigation}) => {
    const fetchToken=async()=>{
        const token=await AsyncStorage.getItem('Token');
        if(token){
           navigation.replace("Welcome") 
        }else{
           navigation.replace("Splashone")
        }
     
    }
    useEffect(()=>{
        fetchToken();
        
        },[])
  return (
    <View style={{flex:1,justifyContent:'center'}}>
   {/* <ActivityIndicator size={50} color='red'/> */}
   <BallIndicator color='red' size={50}/>
   </View>
  )
}

export default Loading