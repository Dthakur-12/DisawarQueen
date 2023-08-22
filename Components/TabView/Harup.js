import { View, Text, StyleSheet, Pressable, TextInput,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const Harup = () => {
    const valueone = [];
    const valuetwo = [];
    for (let i = 0; i < 10; i++) {
        valueone.push(i)
    }

    for (let i = 0; i < 10; i++) {
        valuetwo.push(i)
    }

    return (
        <View style={Styles.container}>
              <ScrollView>
             <KeyboardAvoidingView behavior='position'>
              
           
            <View style={{justifyContent:'center',marginTop:30}}>
           
                <Text style={Styles.textstyle}>Harup Anadar(A)</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',marginTop:10 }}>
                    {valueone.map((item, index) => {
                        return (
                            <Pressable key={index}>
                                <View style={{ borderWidth: 2, borderColor: 'gray', margin: 5, borderRadius: 10 }}>

                                    <Text style={{ textAlign: 'center',color:'black' }}>A{item}</Text>

                                    <TextInput   keyboardType='number-pad' style={{ padding: 10, width: 50, height: 40, fontSize: 10,textAlign:'center',color:'black' }} />
                                </View>
                            </Pressable>
                        )
                    })}
                </View>
            </View>
            <View style={{justifyContent:'center',marginTop:50}}>
                <Text style={Styles.textstyle}>Harup Anadar(B)</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',marginTop:10 }}>
                    {valuetwo.map((item, index) => {
                        return (
                            <Pressable key={index}>
                                <View style={{ borderWidth: 2, borderColor: 'gray', margin: 5, borderRadius: 10 }}>

                                    <Text style={{ textAlign: 'center',color:'black' }}>B{item}</Text>

                                    <TextInput  keyboardType='number-pad' style={{ padding: 10, width: 50, height: 40, fontSize: 20,textAlign:'center' }} maxLength={2} />
                                </View>
                            </Pressable>
                        )
                    })}
                </View>
            </View>
           
            <View style={{ padding: 15 }}>
                <Pressable style={{ backgroundColor: '#FE0000', padding: 15, borderRadius: 5, }} android_ripple={{ color: 'white' }}>
                    <Text style={Styles.textone}>PLAY-0</Text>
                </Pressable>
            </View>
            </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

export default Harup

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
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

    }
})