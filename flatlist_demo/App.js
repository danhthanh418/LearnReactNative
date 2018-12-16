import React, { Component } from 'react';
import CustomFlatList from './src/components/screens/CustomFlatList';
// import for Menu drawer

import {createAppContainer,createDrawerNavigator,DrawerItems} from 'react-navigation'
import HomeScreen from './src/components/screens/HomeScreen';
import SettingScreen from './src/components/screens/SettingScreen';
import { Container, Header, Body, Content } from 'native-base';
import {StyleSheet,Image} from 'react-native'
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingScreen,
    
  },
},{
  drawerPosition:'left',
  initialRouteName:'Home',
  // contentComponent:CustomContentComponent
});

const MyApp = createAppContainer (MyDrawerNavigator);

const CustomContentComponent = (props)=>(
  <Container>
    <Header style={{height:150}}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/logo.png')}
        ></Image>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}></DrawerItems>
    </Content>
  </Container>
)
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }


  render() {

    return (
      <MyApp></MyApp>
    )
  }
}

const style = StyleSheet.create({
  drawerImage:{
    height:150,
    width:150,
    borderRadius: 75 ,
  }
})
