import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TopBarComponent from './TopBarComponent';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class DifficultyComponent extends React.Component {
    constructor(props) {
      super(props);
    };

    handleFiles = files => {
        var reader = new FileReader();
        reader.onload = function(e) {
            // Use reader.result
            alert(reader.result)
        }
        reader.readAsText(files[0]);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.props.changeParentState('more')}>
                        <Ionicons name="ios-arrow-back" size={26} color="black" />
                    </TouchableOpacity>
                    <Text>                                                                                </Text>
                    <TouchableOpacity onPress={() => this.props.changeParentState("home")}>
                        <FontAwesome name="home" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Difficulty Ratings</Text>
                </View>

                <View>
                    <Text style={styles.intro}>
                        Difficulty ratings are based on a range of factors, and are meant to be used 
                        as an heuristic. Lockpicking skill varies widely, so individual experience 
                        may diverge from the ratings given. However, if you feel you have valuable 
                        intel that can help us update our data, please let us know via the 'Contribute 
                        Intel' page! We will review your findings or concerns and proceed accordingly.
                    </Text>
                </View>

                
            </ScrollView>
        );
    }
}
    
    const styles = StyleSheet.create({
        topBar: {
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          },
        item: {
            alignItems: 'flex-start',
            backgroundColor: '#2eb82e',
            padding: 8,
            marginVertical: 8,
            marginHorizontal: 16,
            borderRadius: 10,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        buttonTitle: {
            fontSize: 25,
        },
        buttonText: {
            fontSize: 12,
            fontWeight: '200',
            marginHorizontal: 3,
        },
        intro: {
            marginHorizontal: 16,
            marginVertical: 8,
        },
        titleContainer: {
            marginHorizontal: 16,
            alignItems: 'center',
            marginVertical: 4,
        },
    });

