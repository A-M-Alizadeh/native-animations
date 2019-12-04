import React from 'react';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./../source/walking.json')}
      />
    );
  }
}

// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class Splash extends Component {
//   render() {
//     return (
//       <View>
//         <Text> Splash </Text>
//       </View>
//     )
//   }
// }
