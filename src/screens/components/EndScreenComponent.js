//EndScreen Component
    //confirmed possible locks
    //Iterate over confirmed lock attributes, and slowly remove variables
    //from temporary final possible locks array
    //Temporary array passed to EndScreen Component for final display
    //function from Mommy to restart

import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import TopBarComponent from './TopBarComponent';
import BetterItem from './BetterItem';


export default class EndScreenComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.items = [];
    for(var i = 0; i < this.props.lockMatches.length; i++) {
      let currentLock = this.props.lockMatches[i].Name
        this.items.push(<BetterItem title={currentLock}
            id={i}
            key={i}
            onSelect={() => this.props.changeParentState(currentLock)}
        ></BetterItem>);
    }
    const attributesBar = this.props.confirmedAttributes.map((attribute) => {
    return <Text key={attribute}>{attribute}  </Text>
    })
    return (
      <ScrollView>
        <TopBarComponent changeParentState={this.props.changeParentState}></TopBarComponent>
        <View style={styles.answersBar}>
          <Text style={styles.answersText}>{attributesBar}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Possible Matches</Text>
        </View>
          {this.items}
        <View>

        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    title: {
        fontSize: 28,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    answersBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#dbdbda',
        height: 20,
        padding: 3
    },
    answersText: {
      fontSize: 12,
      fontWeight: '200',
      marginHorizontal: 3
    },
    titleContainer: {
      marginHorizontal: 16,
      alignItems: 'center',
      marginVertical: 8,
  },

});





