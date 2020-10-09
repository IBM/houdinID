import React from 'react';
import { SafeAreaView, View, ScrollView, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import TopBarComponent from './TopBarComponent';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Unorderedlist from 'react-native-unordered-list';
import StarRating from 'react-native-star-rating';

export default class LockDetailComponent extends React.Component {
    constructor(props) {
      super(props);
    };

    render() {

        let [lockArray]=this.props.PossibleLocks.filter((obj) => {
            return obj.Name===this.props.selectedLock;
        });
            //console.log("[from LockDetail]: " + this.props.selectedLock);
            //console.log("[from LockDetail]: " + JSON.stringify(lockArray));

        let vulns=[]
        for(i in lockArray.vulnerableTo) {
            console.log("[LockDetail] vulnList: " + i)
            vulns.push(<Unorderedlist><Text>{lockArray.vulnerableTo[i]}</Text></Unorderedlist>);
        }
    
        return (
            <ScrollView>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.props.changeParentState('search')}>
                        <Ionicons name="ios-arrow-back" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.changeParentState("home")}>
                        <FontAwesome name="home" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{lockArray.Name}</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.lockImage}
                        source={ lockArray.image }
                    />
                    {/* <Image
                        style={styles.ratingImage}
                        source={require('../../../assets/difficultyRatingEasy.png')}
                    /> */}
                </View>

                <View style={styles.vitalsAndRatingContainer}>
                    <View style={styles.vitalsContainer}>
                        
                        <Text style={styles.subheader}>Known Bypass:</Text>
                        <Text>{lockArray.knownBypass}</Text> 
                        
                        <Text style={styles.subheader}>Easily Destroyed:</Text>
                        <Text>{lockArray.easilyDestroyed}</Text> 
                        
                        <Text style={styles.subheader}>Anti-Picking Features:</Text>
                        <Text>{lockArray.antiPicking}</Text> 
                        
                        <Text style={styles.subheader}>Pins:</Text>
                        <Text>{lockArray.pins}</Text> 
                        
                    </View>

                    <View style={styles.ratingContainer}>
                        <Text style={styles.subheader}>   Difficulty Rating</Text>
                        <Image
                            style={styles.ratingImage}
                            // source={require('../../../assets/difficultyRatingEasy.png')}
                            source={lockArray.rating}
                        />
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.header}>This lock may be vulnerable to:</Text>
                    {vulns}
                    <Text></Text>
                    <Text style={styles.header}>About This Lock</Text>
                    <Text>{lockArray.about}</Text>
                    <Text></Text>
                    <Text style={styles.header}>Attack Advice</Text>
                    <Text>{lockArray.attack}</Text>
                    <Text></Text>
                    <Text style={styles.header}>Source</Text>
                    <Text>{lockArray.source}</Text>
                </View>
            </ScrollView>
        );
    }
}
// source={require('../../../assets/Masterlock175.jpg')}
const styles = StyleSheet.create({
    topBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
      },
    item: {
        backgroundColor: '#5d5ced',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subheader: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 6,
    },

    intro: {
        marginHorizontal: 16,
        marginVertical: 8,
    },
    container: {
        paddingTop: 50,
    },
    lockImage: {
        width: 220,
        height: 220,
        marginHorizontal: 16,
        marginVertical: 16,
        borderRadius: 10,
        resizeMode: 'contain',
    },
    ratingImage:{
        width: 140,
        height: 140,
        marginHorizontal: 0,
        marginVertical: 16,
        
    },
    titleContainer: {
        marginHorizontal: 16,
        alignItems: 'center',
        marginVertical: 8,
    },
    imageContainer:{
        marginHorizontal: 16,
        alignItems: 'center',
        marginVertical: 0,
        backgroundColor: 'transparent',
    },
    infoContainer: {
        marginHorizontal: 16,
        marginVertical: 5,
    },
    vitalsAndRatingContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        backgroundColor: '#e0e0e0',
        borderColor: 'black',
        borderRadius: 10,
        paddingTop: 14,
    },
    vitalsContainer: {
        flexDirection: 'column',
        marginHorizontal: 0,
        backgroundColor: 'transparent',
        padding: 12,
        width: '50%',
    }, 
    ratingContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        padding: 12,
        width: '50%',
    }
    
});