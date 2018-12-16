import React from 'react';
import { FlatList } from 'react-native';
import { Text, ListItem, Left, Body, Icon, Right, Title } from 'native-base';
import data from '../utils/data.json'
export default class CustomFlatList extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data,
            stickyHeaderIndices: [],
        };
    }
    componentWillMount() {
        var arr = [];
        this.state.data.map(obj => {
            if (obj.header) {
                arr.push(this.state.data.indexOf(obj));
            }
        });
        arr.push(0);
        this.setState({
            stickyHeaderIndices: arr,
        });
    }
    renderItem = ({ item }) => {
        if (item.header) {
            return (
                <ListItem itemDivider>
                    <Left />
                    <Body style={{ marginRight: 40 }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            {item.name}
                        </Text>
                    </Body>
                    <Right />
                </ListItem>
            );
        } else if (!item.header) {
            return (
                <ListItem style={{ marginLeft: 0 }}>
                    <Body>
                        <Text>{item.name}</Text>
                    </Body>
                </ListItem>
            );
        }
    };
    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.name}
                stickyHeaderIndices={this.state.stickyHeaderIndices}
            />
        );
    }
}
