import React from 'react'
import {  useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import Jodi from './Jodi';
import Harup from './Harup';
import NtoN from './NtoN';



const renderScene = SceneMap({
  first: Jodi,
  second: Harup,
  // third:NtoN,
});

export default function TabViewNew() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Jodi' },
    { key: 'second', title: 'Harup & Cross' },
    // { key: 'third', title: 'N to N' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{backgroundColor:'white'}}
    />
  );
}