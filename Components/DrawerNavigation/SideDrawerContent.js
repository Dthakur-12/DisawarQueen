import { View, Text,Image,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import { DrawerContentScrollView,DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { forceTouchGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/ForceTouchGestureHandler'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import FontAwesome5Icon from 'react-native-vector-icons/fontawesome5'

const SideDrawerContent = (props) => {
  // let User=AsyncStorage.getItem('User');
  const [UserData,setUserData]=useState('');

  const fetchData=async()=>{
    let User=await AsyncStorage.getItem('User');
    setUserData(JSON.parse(User));
    console.log(UserData.email);
  }
  
useEffect(()=>{
  fetchData();
},[])


  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <DrawerContentScrollView {...props}>
        <View style={Styles.img}>
        <Image source={require('../../assets/userprofile.png')} style={{height:80,width:80}} />
        <Text style={Styles.textone}>{UserData.email}</Text>
        {/* <Text style={Styles.textone}>Balance:{`{${UserData.wallet}}`}</Text> */}
        </View>
        <View style={{borderBottomColor:'gray',borderWidth:2,margin:10}}>
        </View>
        {/* <DrawerItem label="Home" onPress={()=>{
        props.navigation.navigate('Home')
        }} 
         /> */}
         <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    </View>
  )
}

export default SideDrawerContent

const Styles = StyleSheet.create({
    img:{ alignItems:'center'
    },
    textone:{
        color:'gray',
        fontSize:15,
        fontWeight:'bold',
        marginTop:2
    }
})