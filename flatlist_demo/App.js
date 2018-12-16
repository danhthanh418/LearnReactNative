import React, { Component } from 'react';
import CustomFlatList from './src/components/screens/CustomFlatList';
// import for Menu drawer

import {createAppContainer,createDrawerNavigator} from 'react-navigation'
import HomeScreen from './src/components/screens/HomeScreen';
import SettingScreen from './src/components/screens/SettingScreen';

const MyDrawerNavigator  = createDrawerNavigator({
  Home:{
    screen:HomeScreen
  },
  Settings:{
    screen:SettingScreen
  }
})

const MyApp = createAppContainer (MyDrawerNavigator);

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }


  render() {

    return (
      // <CustomFlatList></CustomFlatList>
      <MyApp></MyApp>
    )
  }
}
