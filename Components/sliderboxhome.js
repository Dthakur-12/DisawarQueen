import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from 'react-native-image-slider-box'

export default class SliderBoxHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        // require('../Assets/dsh.png'),
        // require('../Assets/dsh.png'),
        // require('../Assets/dsh.png')
        // require('./assets/images/girl.jpg'),
      ]
    };
  }

  render() {
    return (
      <View>
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
    );
  }
}

