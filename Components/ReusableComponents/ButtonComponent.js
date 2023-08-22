import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { moderateVerticalScale } from 'react-native-size-matters'
const ButtonComponent = ({
    btnText,
    btnStyle={},
    onPress=()=>{},
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={{...styles.btnStyle,...btnStyle}}>
      <Text style={styles.btntext}>{btnText}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    btnStyle:{
        height:moderateScale(45),
        backgroundColor:'#FE0000',
        borderRadius:moderateScale(5),
        alignItems:'center',
        justifyContent:'center'
    },
    btntext:{
fontWeight: '700',
fontSize: scale(14),
lineHeight: moderateScale(21),
letterspacing: '0.05',
color: '#FFFFFF',
    }

})