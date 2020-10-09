import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import TopBarComponent from './TopBarComponent';
import BetterItem from './BetterItem';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


// onSelect() {
//     this.setState('bypassDetail')
// };

export default class BypassMethodsComponent extends React.Component {
    constructor(props) {
      super(props);
    };

    render() {
        this.items = [];
            for(var i = 0; i < this.props.bypassArray.length; i++) {
                let currentMethod=this.props.bypassArray[i].method
                this.items.push(<BetterItem 
                    title={currentMethod}
                    id={i}
                    key={i}
                    onSelect={() => this.props.callBypassDetail(currentMethod)}
                ></BetterItem>);
    }
        return (
            <ScrollView>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.props.changeParentState('home') }>
                        <Ionicons name="ios-arrow-back" size={26} color="black" />
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => this.props.changeParentState("home")}>
                        <FontAwesome name="home" size={24} color="black" />
                    </TouchableOpacity> */}
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Bypass Methods</Text>
                </View>
                <View style={styles.introContainer}>
                    <Text style={styles.intro}>Bypass is a form of covert entry that attempts to circumvent the security of the lock by attacking the cam, bolt, or locking knobs directly. While lockpicking focuses on defeating the security of the lock through manipulation of components, bypass goes directly to retracting the bolt without affecting the integrity of the components. Certain bypass techniques are also forms of destructive entry, but bypass generally refers to non-destructive methods.</Text>
                </View>
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
        marginVertical: 0,
        alignItems: 'center',
      },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    intro: {
        marginHorizontal: 8,
        marginVertical: 4,
    },
    titleContainer: {
        marginHorizontal: 16,
        alignItems: 'center',
        marginVertical: 4,
    },
    introContainer: {
        marginHorizontal: 16,
        marginVertical: 5,
    },
});
    
    
    
    
    