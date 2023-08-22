import { View, Text, StyleSheet, TextInput, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import RNUpiPayment from 'react-native-upi-payment'
import { Amount } from '../Api/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Deposits = ({navigation}) => {
    const [FullAmount,setfullAmount]=useState('');

    const IntiPayment= ()=>{

        RNUpiPayment.initializePayment({
            vpa: 'relir00957686@yesbank', // or can be john@ybl or mobileNo@upi
            payeeName: 'xyz',
            amount: FullAmount,
            transactionRef: 'aasf-332-aoei-fn'
          }, successCallback, failureCallback);
            }



        const successCallback= (data)=>{
            alert('Success called');
            console.log('sucess',data);
            const TrnsStatus=data.Status;
            const TrnsId=data.txnId;
            const ResponseCode=data.responseCode;
            const TrnsRef=data.txnRef;
            const amount=FullAmount;
            // alert(data.Status);
            Amount("SUCCESS",TrnsId,ResponseCode,TrnsRef,amount).then((response)=>{
                // if(response.error){
                //     alert(response.userMessage);
                // }else{
                AsyncStorage.setItem('User', JSON.stringify(response.data.user));
                // const Wallet=res.data.user.wallet;
                navigation.navigate('HomePage');
                alert("User Wallet Updated Succeefully");
                setfullAmount('');

                // console.log(response);
             
                
                // }

            }).catch((err)=>{
                console.log(err);
            })    
        }


        const failureCallback =(data)=>{   
            alert('failure called');
        console.log("failure",data);
        
        const TrnsStatus=data.Status;
        const TrnsId=data.txnId;
        const ResponseCode=data.responseCode;
        const TrnsRef=data.txnRef;
        const amount=FullAmount;
        // alert(data.Status);
        Amount(TrnsStatus,TrnsId,ResponseCode,TrnsRef,amount).then((response)=>{
            console.log(response);            
            AsyncStorage.setItem('User', JSON.stringify(response.data.user));
            navigation.navigate('HomePage');
                alert("User Wallet Not Updated");
                setfullAmount('');
        }).catch((err)=>{
            console.log(err);
        })
        }
   
     
    return (
        <View style={Styles.Container}>
            <View style={{ padding: 20,  marginTop: 20, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#ccc', borderRadius: 10, }}>
                    <Image source={require('../../assets/staricon.png')} />
                    <TextInput style={Styles.textinput} placeholder='Enter Points to Add' placeholderTextColor={'gray'} keyboardType='decimal-pad' onChangeText={FullAmount=>setfullAmount(FullAmount)} value={FullAmount} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:10}}>
                    <Text style={Styles.depositamount}>+100</Text>
                    <Text style={Styles.depositamount}>+500</Text>
                    <Text style={Styles.depositamount}>+1000</Text>
                </View>
                <View style={{marginTop:40}}>
                <Pressable onPress={IntiPayment} style={{ backgroundColor: '#FE0000', padding: 15, borderRadius: 5,}} android_ripple={{ color: 'white' }}>
                    <Text style={Styles.textbtn}>PAY</Text>
                </Pressable>
                </View>
                <View style={{marginTop:40}}>
                    <Text style={Styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
                </View>
                <View style={{marginTop:40}}>
                    <Pressable style={{ borderWidth: 1, borderColor: '#FE0000', padding: 15, borderRadius: 5, }} android_ripple={{ color: 'white' }}>
                        <Text style={{ color: '#FE0000', textAlign: 'center', fontSize: 15, fontWeight: 'medium' }}>Send Payment Proofs to Admin</Text>
                    </Pressable>
                </View>
                <View style={{marginTop:30}}>
                    <Pressable style={{ borderWidth: 1, borderColor: 'blue', padding: 15, borderRadius: 5, }} android_ripple={{ color: 'white' }}>
                        <Text style={{ color: 'blue', textAlign: 'center', fontSize: 15, fontWeight: 'medium' }}>Request Points Offline</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default Deposits

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    textinput: {
        // textAlign: 'center',
        fontSize: 15,
        padding: 15,
        color: 'black',
    },
    depositamount: {
        fontFamily: 'Poppins',
        fontStyle: 'Medium',
        fontSize: 15,
        color: '#826F6F',
    },
    textbtn: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    paragraph: {
        fontfamily: 'Poppins',
        fontStyle: 'Regular',
        fontSize: 15,
        // verticalAlign: 'Top',
        // alignSelf:"stretch",
        color: '#826F6F',

    }
})