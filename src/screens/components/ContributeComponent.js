import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TopBarComponent from './TopBarComponent';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default class ContributeComponent extends React.Component {
    constructor(props) {
      super(props);
    };

    // handleFiles = files => {
    //     var reader = new FileReader();
    //     reader.onload = function(e) {
    //         // Use reader.result
    //         alert(reader.result)
    //     }
    //     reader.readAsText(files[0]);
    // }

    render() {
        return (
            <ScrollView>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.props.changeParentState('more')}>
                        <Ionicons name="ios-arrow-back" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.changeParentState("home")}>
                        <FontAwesome name="home" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Contribute</Text>
                </View>

                <View style={styles.introContainer}>
                    
                    <Text>
                        houdinID is community-driven project that relies on research and 
                        feedback from researchers, pentesters, and locksport enthusiasts
                        like you!
                    </Text>

                    <View style={styles.paragraphSeparator}>
                        <Feather name="key" size={20} color="black" style={styles.keyIconStyle} />
                    </View>

                    <Text>
                        To add to our data or suggest an improvement, please click on the 
                        link below to go to our git repo and create a git pull request. We
                        will review your changes. Thanks in advance for your collaboration!
                    </Text>
                </View>


                <TouchableOpacity style={styles.item}>
                    <Text style={styles.buttonTitle}>Go to GitHub</Text>
                </TouchableOpacity>


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
        introContainer: {
            marginHorizontal: 16,
            marginVertical: 8,
        },
        paragraphSeparator: {
            alignItems:'center',
            marginVertical: 8
        },
    });

