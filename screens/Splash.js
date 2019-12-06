
import React from 'react';
import { Animated, Easing, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import {navigationOptions} from 'react-navigation'

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }
  
// startAnimation() {
//   Animated.sequence([
//     Animated.delay(0),
//     Animated.timing(this.state.progress, {
//       toValue: 1,
//       duration: 3000
//     })
//   ]).start(() => {
//     // Logic whenever an iteration finishes...
//     this.startAnimation();
//   });
// }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start();
    // this.startAnimation();

  }

  render() {
    return (
      <LottieView source={require('./../source/lottie/diamond.json')} progress={this.state.progress} autoPlay />
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
