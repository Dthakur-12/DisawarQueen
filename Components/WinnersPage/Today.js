import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Today = () => {
    return (
        <ScrollView>
            <View style={Styles.Container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={Styles.TextStyleone}>Winner Name</Text>
                    <Text style={Styles.TextStyleone}>Game Rate</Text>
                    <Text style={Styles.TextStyleone}>Win Time</Text>
                </View>

                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>

                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#826F6F', borderRadius: 8 }}>
                    <Text style={Styles.txtstyletwo}>Push*****</Text>
                    <Text style={Styles.txtstyletwo}>DISAWAR</Text>
                    <Text style={Styles.txtstyletwo}>06:05 AM</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Today

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
    },
    TextStyleone: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 16,
        lineheight: 18,
        color: '#000000',
    },
    txtstyletwo: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineheight: 15,
        color: '#826F6F',
        padding: 10,
    }
})