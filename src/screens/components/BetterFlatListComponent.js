import React from 'react';
import { View, StyleSheet, } from 'react-native';
import BetterItem from './BetterItem';

export default class BetterFlatList extends React.Component {
    constructor(props) {
        super(props);
        // this.props.selected initially is false, coming from this.state.selected in QuestionComponent
        this.state = {selected: this.props.selected};

        this.onSelect = this.onSelect.bind(this);

        this.items = [];
    }

    componentDidUpdate() {
        console.log("[BetterFlatListComponent]: Update.. I got new props hopefully! " + JSON.stringify(this.props.selected));
        if (this.props.selected != this.state.selected) {
            this.setState({selected: this.props.selected});
        }
    }

    // id is index of selected obj
    onSelect(id) {
        var newSelected = this.state.selected;
        newSelected[id] = !newSelected[id];
        this.setState({selected: newSelected}, function() {
            console.log("[BetterFlatListComponent]: This is the new selected I'm giving to QC! " + JSON.stringify(this.state.selected));
            this.props.onSelect(this.state.selected);
        });
        
    }

    render() {
        this.items = [];
        // data = answers array
        for(var i = 0; i < this.props.data.length; i++) {
            this.items.push(<BetterItem title={this.props.data[i].text}
                id={i}
                key={i}
                onSelect={this.onSelect}
                selected={this.state.selected[i]}
            ></BetterItem>);
        }

        return (
            <View>
                {this.items}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  });