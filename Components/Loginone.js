import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

const Loginone = (props) => {
    const [inputNumber, setinputNumber]=useState('');

    const InputHandler=(inputNumber)=>{
setinputNumber(inputNumber);
    }

const showNumber =()=>{
    alert(`the enetered value is ${inputNumber}`);
}

const resetNumber=()=>{
  setinputNumber('');
  

    
}

    return (
        <View style={Styles.Container}>
            <View style={Styles.main}>
                <View style={Styles.maintext}>
                    <Text style={Styles.textone}>Welcome</Text>
                </View>
                {/* <Formik initialValues={{ phonenumber: '' }} onSubmit={values =>{ console.log(values)
                alert('values send')}}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => ( */}
                        <View style={{ padding: 20, paddingTop: 10 }}>
                            <TextInput placeholder='Enter Your Phone Number...' keyboardType='decimal-pad' maxLength={10}
                                style={Styles.input} onChangeText={InputHandler}/>
                            <View style={{ backgroundColor: "#FE0000", borderRadius: 5, marginTop: 40 }}>
                                <TouchableOpacity onPress={showNumber}>
                                    <Text style={{ alignSelf: 'center', color: 'white', padding: 15, fontSize: 15 }}>Send OTP</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={resetNumber}>
                                    <Text style={{ alignSelf: 'center', color: 'white', padding: 15, fontSize: 15 }}>ResetNumber</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    {/* )}
                </Formik> */}

            </View>

        </View>
    )
}

export default Loginone

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },
    textone: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 25,
        color: '#000000',
    },
    texttwo: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 18,
        color: '#826F6F',
    },
    input: {
        elevation: 1,
        padding: 20,
    },
    main: {
        padding: 10,

    },
    maintext: {
        alignItems: 'center',
        marginTop: 200
    },
    forgettext: {
        alignSelf: 'flex-end',
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 13,
        color: '#0D31EF'
    },
    stext: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 15,
        color: '#000000',
    }

})