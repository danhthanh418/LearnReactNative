import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Easing,
  Dimensions,
  Image,
} from 'react-native';

import icon from './assets/img/icon.png';
const {width, height} = Dimensions.get ('window');

export default class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      fadeValue: new Animated.Value (0),
      xValue: new Animated.Value (0),
      springValue: new Animated.Value(0.3),
      rotateValue: new Animated.Value(0)
    };
  }

  fadeAnimation = () => {
    Animated.timing (this.state.fadeValue, {
      toValue: 1, //do mo
      duration: 1000,
    }).start ();
  };

  moveAnimation = () => {
    Animated.timing (this.state.xValue, {
      toValue: width - 100, //khoang cach
      duration: 1200,
      // easing:Easing.linear //chuyen dong tuyen tinh
      // easing:Easing.back()
      easing: Easing.linear,
    }).start (() => {
      Animated.timing (this.state.xValue, {
        toValue: 0, //khoang cach
        duration: 1200,
        // easing:Easing.linear //chuyen dong tuyen tinh
        // easing:Easing.back()
        easing: Easing.linear,
      }).start ( ()=>{
        this.moveAnimation();
      });
    });
  };

  springAnimation = ()=>{
    Animated.spring(this.state.springValue,{
      toValue:1.3,
      friction:1
    }).start();
  }

  rotateAnimation = ()=>{
    Animated.sequence([
      Animated.timing(this.state.rotateValue,{
         toValue:100,
         duration :1200,
         easing:Easing.linear
      }),
      Animated.timing(this.state.rotateValue,{
         toValue:0,
         duration :0
      }) 
    ]).start(()=>{
        this.rotateAnimation()
    });
  }

  moveAndRotateAnimation = ()=>{
    Animated.parallel([
      this.moveAnimation(),
      this.rotateAnimation()
    ]).start()
  }
  render () {
    const interpolationRotateAnimation = this.state.rotateValue.interpolate({
      inputRange:[0,100],
      outputRange:['0deg','360deg']
    })
    return (
      <View style={styles.container}>
        {/* <Animated.View style={[styles.animationView,
        
        // {opacity:this.state.fadeValue}
        {left:this.state.xValue}
        ]}>
        </Animated.View> */}
        <Animated.Image
          source={icon}
          style={
            [
              styles.imageView, 
              {left: this.state.xValue},
              // {transform: [{scale: this.state.springValue}],alignSelf:'center'}
              {transform: [{rotate:interpolationRotateAnimation}]}
            ]}
        />
        <TouchableOpacity style={styles.button} onPress={this.moveAndRotateAnimation}>
          <Text style={styles.buttonText}>Animate</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  animationView: {
    width: 100,
    height: 100,
    backgroundColor: 'cyan',
  },
  imageView: {
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: 'red',
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    padding: 12,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
