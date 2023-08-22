import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const MiniGames = () => {
  return (
    <ScrollView>
    <View style={Styles.container}>
      <Text style={{color:'black', paddingLeft:10}}>Offline Games</Text>
      <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Image source={require('../../assets/Archer.png')} style={{ margin: 5 }} />
        <Image source={require('../../assets/Turnlight.png')} style={{ margin: 5 }} />
        <Image source={require('../../assets/Hang.png')} style={{ margin: 5 }} />
        <Image source={require('../../assets/sakoo.png')} style={{ margin: 5 }} />
        <Image source={require('../../assets/Tictoe.png')} />
      </View>
      <View>
      <Text  style={{color:'black', paddingLeft:10}}>Online Games</Text>
      <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Image source={require('../../assets/ludotwo.png')} style={{ margin: 5 }} />
        <Image source={require('../../assets/cric.png')} style={{ margin: 5 }} />
        <Image source={require('../../assets/ninja.png')} style={{ margin: 5 }} />
        <Image source={require('../../assets/baseball.png')} style={{ margin: 5 }} />
        <Image source={require('../../assets/doodlecricket.png')} style={{ margin: 5 }} />
        <Image source={require('../../assets/doodlecricket.png')} style={{ margin: 5 }} />
        <Image source={require('../../assets/butterfly.png')} style={{ margin: 5 }} />
        <Image source={require('../../assets/pony.png')} style={{ margin: 5 }} />
        <Image source={require('../../assets/jetpack.png')} style={{ margin: 5 }} />
       
        
      </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default MiniGames

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }
})