import { View, Text,StyleSheet,Pressable, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const NtoN = () => {
  return (
    <View style={Styles.container}>
      
        <View style={{flex:4,justifyContent:'center'}}>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
        <View>
            <Text style={Styles.textstyletwo}>From</Text>
            <TextInput style={Styles.textInput} keyboardType={'decimal-pad'}/>
        </View>
        <View>
            <Text style={Styles.textstyletwo}>To</Text>
            <TextInput style={Styles.textInput} keyboardType={'decimal-pad'}/>
        </View>
        <View>
            <Text style={Styles.textstyletwo}>Points</Text>
            <TextInput style={Styles.textInput} keyboardType={'decimal-pad'}/>
        </View>
        </View>
        <View>
             <View style={{ padding: 15,marginTop:10 }}>
                <Pressable style={{ backgroundColor: '#FE0000', padding: 15, borderRadius: 5, }} android_ripple={{ color: 'white' }}>
                    <Text style={Styles.textone}>ADD</Text>
                </Pressable>
            </View>
        </View>
        </View>
       
        <View style={{flex:6}}>
      
      <Text style={Styles.textstyle}>Added Numbers</Text>
      <View style={{flex:1,}}>
      <View style={{flex:5,justifyContent:'center'}}>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Text style={Styles.textstyle}>NUMBER</Text>
        <Text style={Styles.textstyle}>AMOUNT</Text>
        <Text style={Styles.textstyle}>REMOVE</Text>
      </View>
      </View>
      <View style={{flex:5,justifyContent:'center'}}>
      <View  style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Text style={Styles.textstyle}>TIME</Text>
        <Text style={Styles.textstyle}>NUMBER</Text>
        <Text style={Styles.textstyle}>AMOUNT</Text>
      </View>
      </View>
      <View style={{ padding: 15,marginTop:50, }}>
                <Pressable style={{ backgroundColor: '#FE0000', padding: 15, borderRadius: 5, }} android_ripple={{ color: 'white' }}>
                    <Text style={Styles.textone}>PLAY-0</Text>
                </Pressable>
            </View>
      </View>
     
      </View>
     
    </View>
  )
}

export default NtoN

const Styles=StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    },
    textInput:{
        borderWidth:1,
        borderColor:'black',
        padding:10,
        // elevation:3,
        borderRadius:10,
        textAlign:'center',
        width:100,
    },
    textone: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    textstyle:{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 15,
        lineheight: 15,
        color: '#000000',
        
            },
            textstyletwo:{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '800',
                fontSize: 15,
                lineheight: 15,
                color: '#000000',
                textAlign:"center",
                    }

})