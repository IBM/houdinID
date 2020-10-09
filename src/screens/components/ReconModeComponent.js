import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TopBarComponent from './TopBarComponent';
import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class ReconModeComponent extends React.Component {
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
                    <Text style={styles.title}>Recon Mode</Text>
                </View>

                <TouchableOpacity style={styles.item}>
                    <Text style={styles.buttonText}>Upload an Image</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <Text style={styles.buttonText}>Add a Note</Text>
                </TouchableOpacity>
              
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
            backgroundColor: '#3daa6a',
            padding: 15,
            marginVertical: 8,
            marginHorizontal: 16,
            borderRadius: 10,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        buttonText: {
            fontSize: 20,
            fontWeight: '300',
            marginHorizontal: 3,
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
        infoContainer: {
            marginHorizontal: 16,
            marginVertical: 5,
        },
    });

