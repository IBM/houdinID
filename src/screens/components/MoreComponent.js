import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TopBarComponent from './TopBarComponent';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class MoreComponent extends React.Component {
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
                    <TouchableOpacity onPress={() => this.props.changeParentState('home')}>
                        <Ionicons name="ios-arrow-back" size={26} color="black" />
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => this.props.changeParentState("home")}>
                        <FontAwesome name="home" size={24} color="black" />
                    </TouchableOpacity> */}
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>More</Text>
                </View>

                <TouchableOpacity 
                    style={styles.item}
                    onPress={() => this.props.changeParentState("about")}>
                    <Text style={styles.buttonTitle}>About</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.item} 
                    onPress={() => this.props.changeParentState("glossary")}>
                    <Text style={styles.buttonTitle}>Glossary</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity 
                    style={styles.item} 
                    onPress={() => this.props.changeParentState("difficulty")}>
                    <Text style={styles.buttonTitle}>Difficulty Ratings</Text>
                </TouchableOpacity> */}

                <TouchableOpacity 
                    style={styles.item} 
                    onPress={() => this.props.changeParentState("contribute")}>
                    <Text style={styles.buttonTitle}>Contribute</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.props.changeParentState("search")}
                >
                    <Text style={styles.buttonTitle}>Explore Locks</Text>
                </TouchableOpacity> */}
               {/* <CSVReader
                    cssClass="csv-reader-input"
                    label="Select CSV with secret Death Star statistics"
                    onFileLoaded={this.handleForce}
                    onError={this.handleDarkSideForce}
                    inputId="ObiWan"
                    inputStyle={{color: 'red'}}
                /> */}
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

