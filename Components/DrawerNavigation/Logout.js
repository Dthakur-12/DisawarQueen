import { View, Text, ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import { logout } from '../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BallIndicator } from 'react-native-indicators'
// import { useNavigation } from 'react';


const Logout = ({navigation}) => {
  // const navigation=useNavigation();

  useEffect(()=>{
 
  // const fetchToken=async()=>{
    // const Token=await AsyncStorage.getItem('Token');
    // if(Token){
      logout().then(async(res)=>{
        // alert('log out hit')
        // console.log(res)
        // await AsyncStorage.removeItem('Token');
        await AsyncStorage.clear();
        navigation.replace("Splashone")
      }).catch((err)=>{
        console.log(err);
      });
      
    // }else{
       
    // }
 
// }
    
    },[]);
  return (
    <>

      <View style={{ flex: 1, justifyContent: 'center' }}>
      <BallIndicator color='red' size={50}/>
        {/* <ActivityIndicator size={50} color='red' /> */}
   
      </View>
      
    </>
  )
}

export default Logout