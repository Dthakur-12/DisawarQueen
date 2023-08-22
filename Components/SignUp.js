import {
    View, Text, StyleSheet, Image,
    TextInput, Button,
    TouchableOpacity,
    KeyboardAvoidingView, Alert, SafeAreaView, ToastAndroid
} from 'react-native'
import React, { useState } from 'react'
import { useToast } from "react-native-toast-notifications";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ScrollView } from 'react-native-gesture-handler';
import { editprofile } from './Api/Api'
import TextInputWithLabel from './ReusableComponents/TextInputWithLabel';
import ButtonComponent from './ReusableComponents/ButtonComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from 'react-native-toast-notifications/lib/typescript/toast';

const SignUp = ({ navigation,route }) => {
    const SignupSchema = Yup.object().shape({
        FullName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is Required'),
        PhoneNumber: Yup.string()
            .required("This field is Required").min(10, 'Phone Number must be at least 10 digits')
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "Phone number is not valid"
            ),
        email: Yup.string().email('Invalid email').required('E-mail Required'),
        Password: Yup.string().required("Password is Required")
    });

    return (
        <SafeAreaView style={Styles.Container}>

            <ScrollView>

                {/* <KeyboardAvoidingView behavior='position'> */}
                <View style={Styles.main}>


                    <View style={Styles.maintext}>
                        {/* <View>
                      <Image source={require('../assets/logo.png')} style={{}}/>
                </View> */}
                        <Text style={Styles.textone}>Welcome</Text>
                        <Text style={Styles.texttwo}>Create Account</Text>
                    </View>
                    <Formik validationSchema={SignupSchema} initialValues={{ FullName: '', PhoneNumber: '', email: '', Password: '' }}
                        onSubmit={(values, { resetForm },) => {
                            // navigation.navigate('Welcome')

                            console.log(values)
                            const Name = values.FullName;
                            const Phone = values.PhoneNumber;
                            const Password = values.Password;
                            const email = values.email;
                            editprofile(Name, Phone, email, Password).then((response) => {
                                // console.log(response);
                                // console.log(response.data.email);
                                // console.log(response.userMessage);
                                if(response.error)
                                {
                                    console.log(response.userMessage);
                                    // Toast.show(response.userMessage);
                                    alert(response.userMessage);
                                } else{
                                    const UserMail=response.data.email;
                                    console.log(UserMail);
                                    
                                    navigation.navigate('OTP',{UserMail});

                                }
                              

                            }).catch((error) => {
                                console.log("error", error);
                                // console.log("error", error.status);
                                

                            });

                        }}>

                        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched,
                        }) => (
                            <View style={{ padding: 15, paddingTop: 30, }}>
                                {/* <TextInput placeholder='Full Name' placeholderTextColor={'gray'} style={Styles.input}
                                        onChangeText={handleChange('FullName')}
                                        onBlur={handleBlur('FullName')}
                                        value={values.FullName} /> */}
                                <TextInputWithLabel
                                    label="Name"
                                    placeholder='Enter your Name..'
                                    placeholderTextColor='#826F6F'
                                    keyboardType='email-address'
                                    onchangeText={handleChange('FullName')}
                                    onBlur={handleBlur('FullName')}
                                    value={values.FullName} />
                                {(errors.FullName && touched.FullName) && <Text style={{ fontSize: 12, color: 'red' }}>{errors.FullName}</Text>}
                                {/* <TextInput placeholder='User Name' placeholderTextColor={'gray'} style={Styles.input}
                                        onChangeText={handleChange('UserName')}
                                        onBlur={handleBlur('UserName')}
                                        value={values.UserName} /> */}

                                <TextInputWithLabel
                                    label='Phone Number'
                                    placeholder='Enter your Phone number'
                                    placeholderTextColor='#826F6F'
                                    keyboardType='phone-pad'
                                    onchangeText={handleChange('PhoneNumber')}
                                    onBlur={handleBlur('PhoneNumber')}
                                    value={values.PhoneNumber} />
                                {(errors.PhoneNumber && touched.PhoneNumber) && <Text style={{ fontSize: 12, color: 'red' }}>{errors.PhoneNumber}</Text>}
                                {/* <TextInput placeholder='Age' placeholderTextColor={'gray'} style={Styles.input} maxLength={2} keyboardType={'decimal-pad'}
                                        onChangeText={handleChange('Age')}
                                        onBlur={handleBlur('Age')}
                                        value={values.Age} /> */}
                                <TextInputWithLabel
                                    label='Email'
                                    placeholder='Enter your email'
                                    placeholderTextColor='#826F6F'
                                    keyboardType='email-address'
                                    onchangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email} />
                                {(errors.email && touched.email) && <Text style={{ fontSize: 12, color: 'red' }}>{errors.email}</Text>}

                                {/* <TextInput placeholder='E-mail' placeholderTextColor={'gray'} style={Styles.input} keyboardType={'email-address'}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email} /> */}
                                <TextInputWithLabel
                                    label='Password'
                                    placeholder='Enter your Password'
                                    placeholderTextColor='#826F6F'
                                    keyboardType='email-address'
                                    onchangeText={handleChange('Password')}
                                    onBlur={handleBlur('Password')}
                                    // rightIcon='true'
                                    // secureTextEntry={true}
                                    // onPressRight={() => setVisible(!isVisible)}
                                    value={values.Password} />
                                {(errors.Password && touched.Password) && <Text style={{ fontSize: 12, color: 'red' }}>{errors.Password}</Text>}

                                <View style={{ backgroundColor: "#FE0000", borderRadius: 5, marginTop: 20 }}>
                                    {/* <TouchableOpacity onPress={handleSubmit}>
                                            <Text style={{ alignSelf: 'center', color: 'white', padding: 15, fontSize: 15 }}>SIGNUP</Text>
                                        </TouchableOpacity> */}
                                    <ButtonComponent
                                        btnText={'SIGNUP'} onPress={handleSubmit} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                                    <Text style={Styles.stext}>Already have an account? </Text>
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('LoginNew')}>
                                        <Text style={{ color: 'red' }}>LOGIN</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
                {/* </KeyboardAvoidingView> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "white",
        // justifyContent: "center",
    },
    textone: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
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
        // elevation: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        color: 'black',
    },
    main: {
        padding: 10,
    },
    maintext: {
        alignItems: 'center',
        // marginTop: 100
        marginVertical: 10,
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