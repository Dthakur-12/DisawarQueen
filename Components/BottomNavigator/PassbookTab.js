import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import { TransectionHistory } from '../Api/Api'
import {useIsFocused} from '@react-navigation/core'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient'

const PassbookTab = () => {
  const isFocused=useIsFocused();
  const [UserData, setUserData]=useState('');
  const [Data,setData]=useState('');
  const FetchHistory=async()=>{
    let User=await AsyncStorage.getItem('User');
    setUserData(JSON.parse(User));
    TransectionHistory().then((res)=>{
      console.log("re",res.data);
      if(res.error){
        console.log("error",res.error.message);
      }else{
        console.log(res.data);
        setData(res.data);
      }
    }).catch((err)=>{
      console.log("Error",err.response);
    })
  
  }
  useEffect(()=>{
    FetchHistory();
    
  },[isFocused]);
  // console.log("new",Data);
  return (
    <View style={{flex:1, justifyContent:'center',backgroundColor:"white"}}>
    
      <View style={{justifyContent:'center',alignContent:'center',}}>
      <LinearGradient style={{borderRadius:10,alignItems:"center",padding:10}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}   colors={['#EE0A79', '#FF6900',]}>
      <Text style={{fontSize:16,fontWeight:'600',color:'white'}}>Available Bal:{UserData.wallet}</Text>
      </LinearGradient>
      </View>
     <ScrollView>
      <Text style={{color:'black', fontSize:15}}>No Data</Text>
      </ScrollView>

    </View>
  )
}

export default PassbookTab