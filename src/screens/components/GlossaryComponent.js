import React from 'react';
import { StyleSheet, Text, ScrollView, Image, SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TopBarComponent from './TopBarComponent';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class GlossaryComponent extends React.Component {
    constructor(props) {
      super(props);
    };

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
                    <Text style={styles.title}>Glossary</Text>
                    {/* <Image
                    style={styles.image}
                    source={ singleMethodArray.image }
                    /> */}
                </View>
                
                <View style={styles.infoContainer}>
                    {/* <Text>{singleMethodArray.detail}</Text> */}
                    <Text>Coming soon!</Text>
                    {/* <Text>Entry 2</Text>
                    <Text>Entry 3</Text>
                    <Text>Entry 4</Text> */}
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
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        intro: {
            marginHorizontal: 16,
            marginVertical: 8,
        },
        image: {
            width: 200,
            height: 200,
            marginHorizontal: 16,
            marginVertical: 16
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

