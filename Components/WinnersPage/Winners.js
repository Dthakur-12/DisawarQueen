import React from 'react'
import {  useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import Today from './Today';
import Rankings from './Rankings';


const renderScene = SceneMap({
  first: Today,
  second: Rankings,
});

export default function Winners() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Today' },
    { key: 'second', title: 'Rankings' },
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