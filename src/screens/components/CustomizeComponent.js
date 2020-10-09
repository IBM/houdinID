import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TopBarComponent from './TopBarComponent';
import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class CustomizeComponent extends React.Component {
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
                <TopBarComponent changeParentState={this.props.changeParentState}></TopBarComponent>
                <Text style={styles.title}>Customize App</Text>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.title}>Upload an Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.title}>Upload a CSV File</Text>
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
            justifyContent: 'space-evenly'
          },
        item: {
            backgroundColor: '#5d5ced',
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
            fontSize: 12,
            fontWeight: '200',
            marginHorizontal: 3,
        },
        intro: {
            marginHorizontal: 16,
            marginVertical: 8,
        }
    });

