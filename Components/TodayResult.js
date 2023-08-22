import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
const TodayResult = (props) => {
  // console.log('here is child data',props)
  return (
    <View style={Styles.Container}>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <Text style={Styles.textone}>TODAY’S RESULTS</Text>
        {/* <Text style={Styles.texttwo}>View all</Text> */}
      </View>
      <View style={{ flexDirection: 'row', flexWrap:'wrap',justifyContent:'space-around'}}>
        <ImageBackground source={require('../assets/gali.png')} style={{ height: 110, width: 150, margin: 5 }}>
          <Text style={Styles.text}>GALI</Text>
          <Text style={Styles.text}>11:40</Text>
          <Text style={Styles.text}>{props?.data?.gali?.number || "NO"} </Text>
        </ImageBackground>
        <ImageBackground source={require('../assets/gzb.png')} style={{ height: 110, width: 150,margin:5 }}>
          <Text style={Styles.text}>GHAZIABAD </Text>
          <Text style={Styles.text}>08:40</Text>
          <Text style={Styles.text}>{props?.data?.ghaziabad?.number || "NO"}</Text>
        </ImageBackground>
        <ImageBackground source={require('../assets/fdb.png')} style={{ height: 110, width: 150, margin: 5 }}>
          <Text style={Styles.text}>FARIDABAD </Text>
          <Text style={Styles.text}>06:15</Text>
          <Text style={Styles.text}>{props?.data?.faridabad?.number || "NO"} </Text>
        </ImageBackground>
        <ImageBackground source={require('../assets/ganesh.png')} style={{ height: 110, width: 150, margin: 5 }}>
          <Text style={{ fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 12,
    // lineHeight: 18,
    color: '#FFFFFF',
    alignSelf: 'center',
    margin:8,}}>SHREE GANESH </Text>
          <Text style={Styles.text}>04:30</Text>
          <Text style={Styles.text}>{props?.data?.shriGanesh?.number || "NO"} </Text>
        </ImageBackground>
        <ImageBackground source={require('../assets/delhi.png')} style={{ height: 110, width: 150, margin: 5 }}>
          <Text style={Styles.text}>DELHI BAZAR </Text>
          <Text style={Styles.text}>03:15</Text>
          <Text style={Styles.text}>{props?.data?.delhiBazar?.number || "NO"} </Text>
        </ImageBackground>
        <ImageBackground source={require('../assets/dsh.png')} style={{ height: 110, width: 150, margin: 5 }}>
          <Text style={Styles.text}>DISAWAR</Text>
          <Text style={Styles.text}>05:10</Text>
          <Text style={Styles.text}>{props?.data?.disawar?.number || "NO"}</Text>
        </ImageBackground>
       
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <ImageBackground source={require('../assets/exc.png')} style={{ height: 110, width: 150, margin: 5 }}>
          <Text style={{ fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 12,
    // lineHeight: 18,
    color: '#FFFFFF',
    alignSelf: 'center',
    margin:8}}>DISAWAR QUEEN</Text>
          <Text style={Styles.text}>05:30</Text>
          <Text style={Styles.text}>{props?.data?.disawarQueen?.number || "NO"}</Text>
        </ImageBackground>
      
        <ImageBackground source={require('../assets/Taj.png')} style={{ height: 110, width: 150, margin:5 }}>
          <Text style={Styles.text}>TAJPUR GOLD</Text>
          <Text style={Styles.text}>09:20</Text>
          <Text style={Styles.text}>{props?.data?.tajpurGold?.number || "NO"}</Text>
        </ImageBackground>
        </View>
   
    </View>
  )
}

export default TodayResult

const Styles = StyleSheet.create({
  Container: {
    // padding:20,
  },
  textone: {
    fontFamily: 'Poppins',
    fonStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    // lineHeight: 24,
    color: '#000000',
    marginRight: 'auto',
    marginLeft:8,
  },
  texttwo: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    // lineHeight: 15,
    color: '#0D31EF',

  },
  text: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14,
    // lineHeight: 18,
    color: '#FFFFFF',
    // alignSelf: 'center',
    textAlign: 'center',
    margin:8,
  }
})