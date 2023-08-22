import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { cos } from 'react-native-reanimated';

const PlayGamestwo = ({navigation,route}) => {
    const {category,otherparams}=route.params;

    const OnPressHandler=()=>{
        // navigation.navigate('Choose')
    }
    console.log(category);
    return (
        <View style={Styles.Container}>
            <View>
                <View style={{ padding: 12 }}>
                    <Pressable onPress={()=>{
                        const Gametype='jodi';
                            navigation.navigate('Jodi',{category,Gametype});
                    }} style={Styles.Pressable} android_ripple={{ color: 'green' }}>
                        <Image source={require('../../assets/sym.png')} style={{ marginHorizontal: 15, }} />
                        <Text style={Styles.btntext}>JODI</Text>
                    </Pressable>
                </View>
                <View style={{ padding: 12 }}>
                    <Pressable onPress={OnPressHandler} android_ripple={{ color: 'green' }} style={Styles.PressableTWO}>
                        <Image source={require('../../assets/sym.png')} style={{ marginHorizontal: 15, }} />
                        <Text style={Styles.btntext}>HARUP & CRCSS</Text>
                    </Pressable>
                </View>
                {/* <View style={{ padding: 12 }}>
                    <Pressable onPress={OnPressHandler} android_ripple={{ color: 'green' }} style={Styles.PressableTHREE}>
                        <Image source={require('../../assets/sym.png')} style={{ marginHorizontal: 15, }} />
                        <Text style={Styles.btntext}>NUMBER TO NUMBER</Text>
                    </Pressable>
                </View> */}
            </View>
        </View>
    )
}

export default PlayGamestwo

const Styles = StyleSheet.create({
    Container: {
    },
    Pressable: {
        backgroundColor: '#016064',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        padding: 15,
    },
    btntext: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 21,
        color: '#FFFFFF',
    },
    PressableTWO: {
        backgroundColor: '#F9977A',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        padding: 15,
    },
    PressableTHREE: {
        backgroundColor: '#FF512F',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        padding: 15,
    },
})