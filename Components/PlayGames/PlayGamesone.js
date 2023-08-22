import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native'
import React from 'react'

const PlayGamesone = ({navigation}) => {
    const OnpressHandler=()=>{
        // navigation.navigate('PlayGames');
    }

    return (
        <View style={Styles.Container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40, }}>
                <View>
                    <Text style={Styles.texone}>DISAWAR</Text>
                    <Text style={Styles.texttime}>10:00 AM - 03:15 AM</Text>
                </View>
                <View>
                    <Pressable style={Styles.Pressable} onPress={()=>{
                        const category='disawar';
                        navigation.navigate('PlayGames',{category});
                    }} android_ripple={{color:'black'}}>
                        <Image source={require('../../assets/sym.png')} style={{ marginRight: 10, }} />
                        <Text style={Styles.btntext}>PLAY GAME</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40, }}>
                <View>
                    <Text style={Styles.texone}>DISAWAR QUEEN</Text>
                    <Text style={Styles.texttime}>10:00 AM - 3:30 AM</Text>
                </View>
                <View>
                    <Pressable style={Styles.Pressable} onPress={()=>{
                        const category='disawarQueen';
                        navigation.navigate('PlayGames',{category});
                    }} android_ripple={{color:'black'}}>
                        <Image source={require('../../assets/sym.png')} style={{ marginRight: 10, }} />
                        <Text style={Styles.btntext}>PLAY GAME</Text>
                    </Pressable>

                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40, }}>
                <View>
                    <Text style={Styles.texone}>DELHI BAZAR</Text>
                    <Text style={Styles.texttime}>10:00 AM - 2:50 AM</Text>
                </View>
                <View>
                    <Pressable style={Styles.Pressable}onPress={()=>{
                        const category='delhiBazar';
                        navigation.navigate('PlayGames',{category});
                    }} android_ripple={{color:'black'}}>
                        <Image source={require('../../assets/sym.png')} style={{ marginRight: 10, }} />
                        <Text style={Styles.btntext}>PLAY GAME</Text>
                    </Pressable>

                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40, }}>
                <View>
                    <Text style={Styles.texone}>SHREE GANESH</Text>
                    <Text style={Styles.texttime}>10:00 AM - 04:00 PM</Text>
                </View>
                <View>
                    <Pressable style={Styles.Pressable} onPress={()=>{
                        const category='shriGanesh';
                        navigation.navigate('PlayGames',{category});
                    }} android_ripple={{color:'black'}}>
                        <Image source={require('../../assets/sym.png')} style={{ marginRight: 10, }} />
                        <Text style={Styles.btntext}>PLAY GAME</Text>
                    </Pressable>

                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40, }}>
                <View>
                    <Text style={Styles.texone}>FARIDABAD</Text>
                    <Text style={Styles.texttime}>10:00 AM - 05:50 PM</Text>
                </View>
                <View>
                    <Pressable style={Styles.Pressable} onPress={()=>{
                        const category='faridabad';
                        navigation.navigate('PlayGames',{category});
                    }} android_ripple={{color:'black'}}>
                        <Image source={require('../../assets/sym.png')} style={{ marginRight: 10, }} />
                        <Text style={Styles.btntext}>PLAY GAME</Text>
                    </Pressable>

                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40, }}>
                <View>
                    <Text style={Styles.texone}>GHAZIABAD</Text>
                    <Text style={Styles.texttime}>10:00 AM - 08:15 PM</Text>
                </View>
                <View>
                    <Pressable style={Styles.Pressable} onPress={()=>{
                        const category='ghaziabad';
                        navigation.navigate('PlayGames',{category});
                    }} android_ripple={{color:'black'}}>
                        <Image source={require('../../assets/sym.png')} style={{ marginRight: 10, }} />
                        <Text style={Styles.btntext}>PLAY GAME</Text>
                    </Pressable>

                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40, }}>
                <View>
                    <Text style={Styles.texone}>TAJPUR GOLD</Text>
                    <Text style={Styles.texttime}>10:00 AM - 09:00 PM</Text>
                </View>
                <View>
                    <Pressable style={Styles.Pressable} onPress={()=>{
                        const category='tajpurGold';
                        navigation.navigate('PlayGames',{category});
                    }} android_ripple={{color:'black'}}>
                        <Image source={require('../../assets/sym.png')} style={{ marginRight: 10, }} />
                        <Text style={Styles.btntext}>PLAY GAME</Text>
                    </Pressable>

                </View>
            </View>



        </View>
    )
}

export default PlayGamesone

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    texone: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 21,
        color: '#000000',
    },
    btntext: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 21,
        color: '#FFFFFF',

    },
    Pressable: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    texttime: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 14,
        lineHeight: 18,
        color: '#826F6F',
    }
})