import React from 'react';
import { StyleSheet, Text, ScrollView, Image, SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TopBarComponent from './TopBarComponent';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class BypassDetailComponent extends React.Component {
    constructor(props) {
      super(props);
    };

    render() {
        // console.log(this.props.bypassInfo.image)

        //console.log(this.props.bypassArray);
        // creating a temp array, which will be the the object where the value at key 
        // .method is the same as the value coming in as selectedMethod.
        let [singleMethodArray]=this.props.bypassArray.filter((obj) => {
            return obj.method===this.props.selectedMethod;
        });
            // right now, selectedMethod is coming through just fine
            //console.log("[from BypassDetail]: selectedMethod: " + this.props.selectedMethod);
            // right now, this singleMethodArray is not being created
            //console.log("[from BypassDetail: singleMethodArray: " + JSON.stringify(singleMethodArray));

        return (
            <ScrollView>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.props.changeParentState('bypass')}>
                        <Ionicons name="ios-arrow-back" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.changeParentState("home")}>
                        <FontAwesome name="home" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{singleMethodArray.method}</Text>
                    <Image
                    style={styles.image}
                    source={ singleMethodArray.image }
                />
                </View>
                
                <View style={styles.infoContainer}>
                    <Text>{singleMethodArray.detail}</Text>
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
            width: 300,
            height: 200,
            marginHorizontal: 16,
            marginVertical: 16,
            borderRadius: 10,
            resizeMode: 'contain'
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

