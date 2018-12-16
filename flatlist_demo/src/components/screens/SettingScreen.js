import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {Icon, Button, Container, Header, Content, Left} from 'native-base';

export default class SettingScreen extends Component {
  onPress = () => {
    this.props.navigation.navigate ('DrawerOpen');
  };
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
                <Text style={{ padding: 10, fontSize: 20, color: '#913'}}>Setting screen</Text>
        </Content>
      </Container>
    );
  }
}
