import React from 'react'
import {  useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import Deposits from './Deposits';
import Withdrawl from './Withdrawl';
import WithDrawltwo from '../AddPoints/Withdrawltwo'
import Share from './Share';


const renderScene = SceneMap({
  first: Deposits,
  second:Withdrawl,
  third:Share,
});

export default function AddPoints() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Deposits' },
    { key: 'second', title: 'Withdrawal' },
    { key: 'third', title: 'Share' },
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