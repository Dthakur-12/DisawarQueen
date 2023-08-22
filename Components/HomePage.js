import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, ScrollView, Pressable } from 'react-native'
import TodayResult from './TodayResult'
import {useIsFocused} from '@react-navigation/core'
import Cardone from './Cardone'
import BottomNavigator from './BottomNavigator/BottomNavigator'
import { openNumber } from './Api/Api'
// import IconButton from './Notifications/IconButton'
import Icon from 'react-native-vector-icons/Fontisto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import LinearGradient from 'react-native-linear-gradient'


const HomePage = ({ navigation, route,props }) => {
  const isFocused=useIsFocused();
  const [Data, setData] = useState({});
  const [UserData,setUserData]=useState('');

  const onNotificationHandler = () => {
    navigation.navigate('Notification');
  }

  const FectData=()=>{
    openNumber().then((res) => {
      console.log("success",res.data.data);
      console.log("success",res.data.user.wallet);
     
      setData(res.data.data);
      setUserData(res.data.user);
      
    }).catch((err) => {
      console.log(err);
    })

  }
  


  useLayoutEffect(() => {
 
    FectData();
    // FetchBalance();
   


    navigation.setOptions({
      headerRight: ({ color, size }) => {
        return (
          <>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',alignItems:'center'}}>
            <Pressable android_ripple={{ color: '#ccc' }} >
              <Icon name='star' color={'red'} size={30} style={{margin:10}} />
            </Pressable>
            <Pressable android_ripple={{ color: '#ccc' }} onPress={onNotificationHandler}>
              <Icon name='bell' color={'white'} size={30} style={{margin:10}} />
            </Pressable>
            {/* <Text style={{color:'white',fontSize:20,margin:5}}>Rs.({UserData?.wallet})</Text> */}
            </View>
          </>
        )
      }
    })
 
  }, [isFocused]);
  // console.log(UserData, 'user');

  return (
    <ScrollView>
      <View style={Styles.Container}>
        <View style={Styles.mainContainer}>
          {/* <Text>{UserData.wallet}</Text> */}
          <View style={{justifyContent:'center',alignContent:'center',}}>
      <LinearGradient style={{borderRadius:10,alignItems:"center",padding:10}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}   colors={['#EE0A79', '#FF6900',]}>
      <Text style={{fontSize:16,fontWeight:'600',color:'white'}}>Available Bal:{`{${UserData && UserData.wallet}.Rs}`}</Text>
      </LinearGradient>
      </View>
        
        
          <ImageBackground source={require('../assets/done.png')} style={{ alignSelf: 'center', height: 95, width: 328, marginTop: 20 }}>
            <Text style={Styles.textone}>{Data?.latestOpened?.category.toUpperCase() || ""}</Text>
            <Text style={Styles.textone}>(5:05 AM)</Text>
            <Text style={Styles.textone}>{Data?.latestOpened?.number || ""}</Text>
            
          </ImageBackground>
          <Pressable onPress={() => {
            navigation.navigate('PlayGame');
          }} android_ripple={{ color: '#ccc', foreground: true, }}>
            <View style={{ backgroundColor: '#2B3151', borderRadius: 10, marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <Image source={require('../assets/play.gif')} style={{ alignSelf: 'center', height: 50, width: 50 }} />
              </View>
              <View>
                <Text style={{ alignSelf: 'center', fontSize: 15, color: 'white', padding: 20, fontWeight: 'bold', textTransform: 'uppercase' }}>Play-Game</Text>
              </View>
            </View>
          </Pressable>
          <View>
            <TodayResult data={Data} />
          </View>
          <View style={{ marginTop: 30 }}>
            <Cardone />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={Styles.offertext}>referral offers</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', elevation: 5, backgroundColor: '#FFFFFF', borderRadius: 10, marginTop: 20, marginHorizontal: 10 }}>
              <View style={Styles.refcontainer}>
                <Text style={Styles.refereltext}>Refer your friends and Earn Rewards</Text>
                <Pressable style={Styles.btnone} android_ripple={{ color: 'pink' }}>
                  <Text style={{ color: 'white', fontSize: 10, padding: 5 }}>KNOW MORE</Text>
                </Pressable>
              </View>
              <View style={Styles.refcontainer}>
                <Image source={require('../assets/gif/giftone.gif')} style={{ height: 100, width: 100 }} />
              </View>
            </View>
          </View>
         
        </View>
      </View>
    </ScrollView>
  )
}

export default HomePage

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  mainContainer: {
    padding: 15,
  },
  textone: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
    padding: 5,
  },
  img: {
    alignSelf: 'center',
    height: 60,
    width: 340,
    marginTop: 30,
    marginLeft: 12,
  },
  offertext: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#000000',
    marginLeft: 10


  },
  btnone: {
    backgroundColor: 'red',
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  refereltext: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 12,
    color: '#826F6F',
    flexWrap: 'wrap',
    lineHeight: 20
    // padding:30,
  },
  refcontainer: {
    padding: 30,
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})