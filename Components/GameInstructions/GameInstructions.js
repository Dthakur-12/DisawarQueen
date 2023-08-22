import React from 'react'
import {  useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import GameRate from './GameRate';
import Instructions from './Instructions';


const renderScene = SceneMap({
  first: GameRate,
  second: Instructions,
});

export default function GameInstructions() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Game Rates' },
    { key: 'second', title: 'Instructions' },
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