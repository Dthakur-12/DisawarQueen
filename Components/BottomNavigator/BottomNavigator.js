import { View, Text } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/AntDesign'
import Book from 'react-native-vector-icons/FontAwesome'
import Points from 'react-native-vector-icons/Feather'
import React from 'react'
import HomePage from '../HomePage'
import PassbookTab from './PassbookTab';
import AddPoints from '../AddPoints/AddPoints';
import Winners from '../WinnersPage/Winners';
import DrawerNavigation from '.././DrawerNavigation/DrawerNavigation'


const Tab = createBottomTabNavigator();

const BottomNavigator = ({navgation}) => {

  return (

    <Tab.Navigator initialRouteName='HomePage' screenOptions={{tabBarStyle:{height:'10%'}}}>
      <Tab.Screen  name="HomePage" component={DrawerNavigation} options={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#ADA4A5',
        tabBarIcon: ({ color }) => {
          return <Icons name='home' size={30} color={color} />
        }
      }} />
      <Tab.Screen name="Passbook" component={PassbookTab} options={{
        headerShown: true,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#ADA4A5',
        tabBarIcon: ({ color }) => {
          return <Book name='book' size={30} color={color} />
        }
      }} />
      <Tab.Screen name="Add Points" component={AddPoints}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: '#ADA4A5',
          tabBarIcon: ({ color }) => {
            return <Points name='file-plus' size={30} color={color} />
          }
        }}
      />
      <Tab.Screen name="Winners" component={Winners}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: '#ADA4A5',
          tabBarIcon: ({ color }) => {
            return <AntDesign name='Trophy' size={30} color={color} />
          }
        }}
      />
    </Tab.Navigator>

  )
}

export default BottomNavigator