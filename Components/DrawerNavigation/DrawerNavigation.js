import 'react-native-gesture-handler';
import { View, Text,Pressable } from 'react-native'
import React from 'react'
import Logoutn from 'react-native-vector-icons/MaterialIcons'
import FIcon from 'react-native-vector-icons/AntDesign'
import Book from 'react-native-vector-icons/FontAwesome'
import Coin from 'react-native-vector-icons/FontAwesome5'
import Bookone from 'react-native-vector-icons/Fontisto'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Article from './Article';
import HomePage from '../HomePage';
import PassbookTab from '../BottomNavigator/PassbookTab';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import Winners from '../WinnersPage/Winners';
import ReferEarn from './ReferEarn';
import GameRate from '../GameInstructions/GameRate';
import Instruction from '../GameInstructions/Instructions';
import Setting from './Setting';
import Logout from './Logout';
import MiniGames from '../OnlineOfflinegamesScreen/MiniGames'
import SideDrawerContent from './SideDrawerContent';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation=({navigation})=> {
  
  return (
    <Drawer.Navigator initialRouteName='Home' drawerContent={(props)=> <SideDrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={HomePage} 
      options={{
      headerStyle: { backgroundColor: '#000' },
      headerTintColor: 'white', drawerLabel: 'Home', drawerActiveTintColor:'red',
      drawerIcon: ({ size, color }) =>
          <FIcon name='home' size={30} color={color} />
  }} />
      <Drawer.Screen name="Profile" component={Profile} 
       options={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: 'white', drawerLabel: 'Passbook', drawerActiveTintColor:'red',
        drawerIcon: ({ size, color }) =>
            <Book name='book' size={30} color={color} />
    }}/>
    <Drawer.Screen name="Winners" component={Winners} 
       options={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: 'white', drawerLabel: 'Winners', 
        drawerActiveTintColor:'red',
        drawerIcon: ({ size, color }) =>
            < FIcon name='Trophy' size={30} color={color} />
    }}/>
     <Drawer.Screen name="Games" component={MiniGames} 
       options={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: 'white', drawerLabel: 'Mini Games', 
        drawerActiveTintColor:'red',
        drawerIcon: ({ size, color }) =>
            < Book name='gamepad' size={30} color={color} />
    }}/>
      {/* <Drawer.Screen name="Refer&Earn" component={ReferEarn} 
       options={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: 'white', drawerLabel: 'Refer & Earn', 
        drawerActiveTintColor:'red',
        drawerIcon: ({ size, color }) =>
        <Bookone name='money-symbol' size={30} color={color} />
    }}/> */}
      <Drawer.Screen name="GameRates" component={GameRate} 
       options={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: 'white', drawerLabel: 'Game Rates', 
        drawerActiveTintColor:'red',
        drawerIcon: ({ size, color }) =>
        <Coin name='coins' size={30} color={color} />
    }}/>
    <Drawer.Screen name="GameInstructions" component={ Instruction} 
       options={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: 'white', drawerLabel: ' Instructions', 
        drawerActiveTintColor:'red',
        drawerIcon: ({ size, color }) =>
        <Book name='hand-o-right' size={30} color={color} />
    }}/>
     <Drawer.Screen name="Settings" component={Setting} 
       options={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: 'white', drawerLabel: 'Settings', 
        drawerActiveTintColor:'red',
        drawerIcon: ({ size, color }) =>
        <FIcon name='setting' size={30} color={color} />
    }}/>
    
    <Drawer.Screen name="Logout" component={Logout} 
       options={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: 'white', drawerLabel: 'Logout', 
        drawerActiveTintColor:'red',
        drawerIcon: ({ size, color }) =>
      
        <Logoutn name='logout' size={30} color={color} />
       
    }}/>
   
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;