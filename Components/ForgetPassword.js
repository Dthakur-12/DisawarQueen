import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { moderateVerticalScale } from 'react-native-size-matters'

const ForgetPassword = () => {
  return (
    <View style={styles.Container}>
      <Text>ForgetPassword</Text>
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
    Container:{
        flex:1,
    },
    
})