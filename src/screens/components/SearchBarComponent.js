import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

// const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state={term:''};
    }

    onTermChange(parameter) {
        this.setState({term: parameter}, function() {
          this.props.onTermSubmit(this.state.term);
        });
    }

    render () {
        return (
            <View style={styles.backgroundStyle}>
                <Fontisto name='search' style={styles.iconStyle} />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Search'
                value={this.state.term}
                onChangeText={newTerm => this.onTermChange(newTerm)}
                onEndEditing={() => this.props.onTermSubmit(this.state.term)}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#dbdbdb',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }

});

