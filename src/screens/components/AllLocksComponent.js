import React from 'react';
import { ScrollView, View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import TopBarComponent from './TopBarComponent';
import BetterItem from './BetterItem';
import SearchBarComponent from './SearchBarComponent';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class AllLocksComponent extends React.Component {
    constructor(props) {
    super(props);

    // set state to the filtered lock array
    this.state={filteredLocks: this.props.allLocks, term:''};
    //console.log("term in constructor: "+this.state.term);

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    //state has to be bound to AllLocks because otherwise .filter will be looking for state in the object class
    this.filterLocks = this.filterLocks.bind(this); 
    
    };

    // onSearchSubmit(onTerm) {
    //     console.log("term in onSearchSubmit: " + onTerm);
    //     this.setState({term: onTerm});
    //     console.log("state set to term in onSearchSubmit: "+this.state.term)
    //     // reset filteredLocks to contain all possibilities
    //     this.setState({filteredLocks: this.props.allLocks});
    //     // call filter on the array
    //     this.setState({filteredLocks: this.state.filteredLocks.filter(this.filterLocks)}); 
    // }

    onSearchSubmit(onTerm) {
        console.log("term in onSearchSubmit: " + onTerm);
        this.setState({term: onTerm}, function() {
          console.log("state set to term in onSearchSubmit: "+this.state.term)
          // reset filteredLocks to contain all possibilities
          this.setState({filteredLocks: this.props.allLocks}, function() {
            // call filter on the array
            this.setState({filteredLocks: this.state.filteredLocks.filter(this.filterLocks)});
          });
        });
    }

    filterLocks(item) {
        //console.log("item in filterLocks: " + JSON.stringify(item));
        // console.log("I'm running filterLocks!");
        // console.log("term in filterLocks: " + this.state.term);
        // console.log(JSON.stringify(item.commonAttributes));
        if (item.Name.toLowerCase().includes(this.state.term.toLowerCase()) ) {
            return true;
        } 
        for(var i in item.commonAttributes) {
            console.log(i);
            if (item.commonAttributes[i].toLowerCase().includes(this.state.term.toLowerCase())) {
                return true;
            }
        }
        return false;
    }

    render() {
        //console.log(this.props.allLocks);
        this.items = [];
            for(var i = 0; i < this.state.filteredLocks.length; i++) {
                //console.log(this.props.allLocks[i].Name);
                let currentLock = this.state.filteredLocks[i].Name
                this.items.push(<BetterItem 
                    id={i}
                    key={i}
                    title={currentLock}
                    onSelect={() => this.props.callLockDetail(currentLock)}
                ></BetterItem>);
            }
        return (
            <ScrollView>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.props.changeParentState('home')}>
                        <Ionicons name="ios-arrow-back" size={26} color="black" />
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => this.props.changeParentState("home")}>
                        <FontAwesome name="home" size={24} color="black" />
                    </TouchableOpacity> */}
                </View>
                
                <View style={styles.titleContainer}>
                        <Text style={styles.title}>Search All Locks</Text>
                </View>
                
                <SearchBarComponent onTermSubmit={this.onSearchSubmit}></SearchBarComponent>
                <View>
                    {this.items}
                </View>
            
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        marginVertical: 8,
        alignItems: 'center',
      },
    item: {
        backgroundColor: '#5d5ced',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    intro: {
        marginHorizontal: 16,
        marginVertical: 8,
    },
    titleContainer: {
        marginHorizontal: 16,
        alignItems: 'center',
        marginVertical: 8,
    },
});
