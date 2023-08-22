import { View, Text,StyleSheet,TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {moderateVerticalScale} from 'react-native-size-matters'
import Visible from 'react-native-vector-icons/MaterialIcons'

const TextInputWithLabel = ({
    label,placeholder,placeholderTextColor,
    onchangeText=()=>{},
    textinput={},
    value,
    rightIcon,
    onBlur=()=>{},
    onPressRight,
    ...props

}) => {
  return (
    <View style={{marginVertical:5}}>
    <Text style={styles.label}>{label}</Text>
    <View style={{elevation:10,backgroundColor:'#ffff',borderRadius:moderateScale(5), flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
    <TextInput
    placeholder={placeholder} placeholderTextColor={placeholderTextColor} onChangeText={onchangeText} onBlur={onBlur} value={value}
      style={styles.textinput}
      {...props}/>
     
     {rightIcon=='true' ?<TouchableOpacity activeOpacity={0.5} onPress={onPressRight}>
      <Visible name='visibility' size={25} color='#826F6F' />
      </TouchableOpacity> : null}
     </View>
     </View>
    
  )
}

export default TextInputWithLabel

const styles = StyleSheet.create({
    textinput:{
        paddingVertical:moderateVerticalScale(8),
        fontSize:scale(12),
        color:'#826F6F',
        flex:1,
    },
    label:{
        fontSize:scale(12),
        color:'#826F6F',
        fontWeight:'bold',
        marginVertical:5,
    }
})