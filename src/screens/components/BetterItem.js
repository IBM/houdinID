import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
  } from 'react-native';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <TouchableOpacity
                // this.props.id is item index
                onPress={() => this.props.onSelect(this.props.id)}
                style={[
                    styles.item,
                    { backgroundColor: this.props.selected ? '#33ccff' : '#3399ff' },
                ]}
            >
            <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#33ccff',
      padding: 8,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
    },
    title: {
      fontSize: 25,
    },
  });