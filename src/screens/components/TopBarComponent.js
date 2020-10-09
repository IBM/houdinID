// Top Bar component

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { render } from 'react-dom';

class TopBarComponent extends React.Component {
    constructor(props) {
     super(props);
    };

render () {
    return (
        <View style={styles.topBar}>
            <TouchableOpacity onPress={() => this.props.changeParentState('home')}>
                <Ionicons name="ios-arrow-back" size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.changeParentState("home")}>
                <FontAwesome name="home" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
  } 
};

  const styles = StyleSheet.create({
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 8,
      marginVertical: 8,
      alignItems: 'center',
    },
  });

  export default TopBarComponent;