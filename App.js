import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import * as React from 'react';
// import { ToastProvider } from 'react-native-toast-notifications'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Components/HomePage'
import BottomNavigator from './Components/BottomNavigator/BottomNavigator';
import DrawerNavgation from './Components/DrawerNavigation/DrawerNavigation';
import PlayGamesone from './Components/PlayGames/PlayGamesone';
import PlayGamestwo from './Components/PlayGames/PlayGamestwo';
import TabViewNew from './Components/TabView/TabViewNew';
import SplashScreentwo from './Components/SplashScreens/SplashScreentwo';
import SplashScreenone from './Components/SplashScreens/SplashScreenone';
import SplashScreenthree from './Components/SplashScreens/SplashScreenthree';
import SignUp from './Components/SignUp';
import OtpInput from './Components/OtpInput';
import Loading from './Components/Loading';
import SignUpDone from './Components/SignUpDone';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notification from './Components/Notifications/Notifications'
import Cardone from './Components/Cardone';
import LoginNew from './Components/LoginNew';
import Jodi from './Components/TabView/Jodi';
import ForgetPassword from './Components/ForgetPassword';
import BetPlaced from './Components/BetPlaced';



const Stack = createNativeStackNavigator();
const App = ({ navigation }) => {
  //   const [isLoggedIn, setLogged]=useState(null)
  //   const detectLogin= async ()=>{
  //     const token = await AsyncStorage.getItem('Token')
  //     if(token){
  //         setLogged(true)
  //     }else{
  //         setLogged(false)
  //     }
  //  }
  // useEffect(()=>{
  //    detectLogin()
  // },[])

  //   useEffect(()=>{

  //     async  function LoginStatus(){
  //       const Token=await AsyncStorage.getItem('Token');
  //       if(Token){
  //        setLogged(true)
  //       }else{
  //        setLogged(false)
  //       }
  //     }
  //     LoginStatus();

  //   },[])

  return (







    <NavigationContainer>
       
      <Stack.Navigator>
        <Stack.Screen name='Loading' component={Loading} options={{ headerShown: false, }} />   
        <Stack.Screen name='Splashone' component={SplashScreenone} options={{ headerShown: false, }} />
        <Stack.Screen name='SplashTwo' component={SplashScreentwo} options={{ headerShown: false, }} />
        <Stack.Screen name='SplashThree' component={SplashScreenthree} options={{ headerShown: false, }} />
        <Stack.Screen name='LoginNew' component={LoginNew} options={{ headerShown: false, }} />
        <Stack.Screen name='OTP' component={OtpInput} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='Welcome' component={SignUpDone} options={{ headerShown: false, }} />
        <Stack.Screen name='Home' component={BottomNavigator} options={{ headerShown: false, }} />
        <Stack.Screen name='PlayGame' component={PlayGamesone} />
        <Stack.Screen name='PlayGames' component={PlayGamestwo} />
        <Stack.Screen name='Jodi' component={Jodi} />
        <Stack.Screen name='BetPlaced' component={BetPlaced} />
        <Stack.Screen name='Notification' component={Notification} options={{headerShown:'false'}} />
      </Stack.Navigator>
     
    </NavigationContainer>
   



  )
}

export default App
