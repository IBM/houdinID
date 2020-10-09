import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TopBarComponent from './TopBarComponent';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class AboutComponent extends React.Component {
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
                    <Text>                  </Text>
                    <TouchableOpacity onPress={() => this.props.changeParentState("home")}>
                        <FontAwesome name="home" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>About</Text>
                </View>

                <View style={styles.contentContainer} >
                    <Text style={styles.heading}>Mission</Text>
                    <Text style={styles.paragraphText}>The mission of houdinID is to be a resource for pentesters and 
                        locksport enthusiasts, to further physical security research, and
                        to make information about lock security levels more accessible to 
                        the public.</Text>
                </View>

                <View style={styles.contentContainer} >
                    <Text style={styles.heading}>Team</Text>
                    <Text style={styles.paragraphText}>This project is funded by X-Force Red, an autonomous offensive 
                        security team within IBM Security. </Text>
                    <Text></Text>
                    <Text style={styles.paragraphText}>Project lead: @tofrandi.
                    </Text>
                    <Text style={styles.lineBreakStyle}></Text>
                    <Text style={styles.paragraphText}>Project concept and consulting by @unicornsasfuel.</Text>
                    <Text style={styles.lineBreakStyle}></Text>
                    <Text style={styles.paragraphText}>Development support provided by @vhulf.</Text>
                    <Text></Text>
                    <Text style={styles.paragraphText}>Bypass methods research shared by Shawn Pearcy.</Text>
                    <Text></Text>
                    <Text style={styles.paragraphText}>Additional lock research and guidance by @LockPickingLwyr.</Text>
                </View>

                <View style={styles.contentContainer} >
                    <Text style={styles.heading}>Attribution</Text>
                    <Text style={styles.paragraphText}>houdinID draws much of its lock data from LockWiki, another
                        community project under the Creative Commons Attribution-ShareAlike
                        License. 
                    </Text>
                    <Text></Text>
                    <Text style={styles.paragraphText}>
                        Changes to the original include reformatting, additions, and omissions.</Text>
                    <Text></Text>
                    <Text style={styles.paragraphText}>www.lockwiki.com</Text>
                </View>

                <View style={styles.contentContainer} >
                    <Text style={styles.heading}>Licensing</Text>
                    <Text style={styles.paragraphText}>houdinID is distributed under the Creative Commons 
                        Attribution-ShareAlike License:
                    </Text>
                    <Text></Text>
                    <Text style={styles.paragraphText}>https://creativecommons.org/licenses/by-sa/3.0/legalcode</Text>
                </View>

                <View style={styles.contentContainer} >
                    <Text style={styles.heading}>Contact</Text>
                    <Text style={styles.paragraphText}>Please send letters by carrier pigeon to the private residence
                        of Ray Sims.
                    </Text>
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
        contentContainer: {
            paddingVertical: 16,
            paddingHorizontal: 8,
            marginHorizontal: 12,
            marginVertical: 4,
            backgroundColor: '#99ccff',
        },
        titleContainer: {
            marginHorizontal: 16,
            alignItems: 'center',
            marginVertical: 4,
        },
        heading: {
            fontWeight: 'bold',
            fontSize: 16,
            paddingVertical: 4,
        },
        paragraphText: {
            fontSize: 12,
        },
        lineBreakStyle: {
            fontSize: 4,
        }
    });

