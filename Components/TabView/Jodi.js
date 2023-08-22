import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useNavigation } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { PlayGame } from '../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

const Jodi = ({ navigation, route }) => {
    const { category, Gametype } = route.params;
    const [TAmount, setTAmount] = useState(0);
    const [numberObj, setNumberObj] = useState({});

    const Data = [];

    const OnbetHandler = () => {
        console.log(numberObj, TAmount);
        PlayGame(numberObj, TAmount,Gametype,category).then((res) => {
            console.log(res);
            if (res.error) {
                console.log(res.error.message)
            } else {
                // alert(res.userMessage);
                AsyncStorage.setItem('User', JSON.stringify(res.data.user));
                const Wallet=res.data.user.wallet;
                console.log(Wallet);
                navigation.navigate('BetPlaced',{Wallet});
            }

        }).catch((err) => {
            console.log(err);
            // console.log(err.respons.message);
        })
    }
    const handleChange = (e, index) => {
        if (parseInt(e.nativeEvent.text)) {
            let newObj = numberObj;
            if (newObj[parseInt(index)]) {
                delete newObj[index];
            } else {
                newObj[parseInt(index)] = parseInt(e.nativeEvent.text);
            }
            setNumberObj({ ...newObj });

            let totalAmount = 0;
            Object.keys(numberObj).map((key) => {
                let record = numberObj[key];
                totalAmount = totalAmount + record;
            })

            console.log(totalAmount, '----', numberObj)
            setTAmount(totalAmount);
        } else {
            let newObj = numberObj;
            if (newObj[parseInt(index)])
                delete newObj[index];

            setNumberObj({ ...newObj });

            let totalAmount = 0;
            Object.keys(numberObj).map((key) => {
                let record = numberObj[key];
                totalAmount = totalAmount + record;
            })

            console.log(totalAmount, '----', numberObj)
            setTAmount(totalAmount);

        }

    }
    console.log(category, Gametype);

    const values = [];
    for (let i = 0; i < 100; i++) {
        values.push(i)
    }

    
    return (
        <View style={Styles.Container} >
            <ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {values.map((item, index) => {
                        return (
                            <TouchableOpacity key={"JODI" + index} >
                                <View style={{ borderWidth: 2, borderColor: 'gray', margin: 5, borderRadius: 10 }}>

                                    <Text style={{ textAlign: 'center', color: 'black' }}>{item}</Text>

                                    <TextInput onEndEditing={(e) => handleChange(e, index)} keyboardType='number-pad' style={{ padding: 10, width: 50, height: 40, fontSize: 15, color: 'black' }} />
                                    {/*  onEndEditing={(e)=>{console.log(e.nativeEvent.text,index)}} */}
                                </View>
                            </TouchableOpacity>
                            // </View>
                        )
                    })}

                </View>
            </ScrollView>
            <View style={{ padding: 15 }}>
                <Pressable onPress={OnbetHandler} style={{ backgroundColor: '#FE0000', padding: 15, borderRadius: 5, }} android_ripple={{ color: 'white' }}>
                    <Text style={Styles.textone}>Pay: {TAmount}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Jodi

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    textone: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
    }
})