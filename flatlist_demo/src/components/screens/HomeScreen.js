import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon, Button, Container, Header, Content, Left} from 'native-base';
export default class HomeScreen extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
                    <Icon name="ios-menu" onPress={() => this.props.navigation.openDrawer()}/>
          </Left>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{padding: 10, fontSize:20, color:'#539'}}>Home screen</Text>
        </Content>
      </Container>
    );
  }
}
