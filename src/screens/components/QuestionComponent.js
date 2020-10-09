// Child Question Component: 
  // Takes in  possible attributes to question from Questions Array
  // Contains Questions, Returns Selected Attributes;
  // Go to Child Helper Function for Decision / Next Question

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import TopBarComponent from './TopBarComponent';
import BetterItem from "./BetterItem";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import LinkedDecisionTree from "../helpers/LinkedDecisionTree";
import Dialog, { DialogTitle, DialogContent } from 'react-native-popup-dialog';
import { Button } from 'react-native'

  
export default class QuestionComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selected: -1};
    this.decisionTree = new LinkedDecisionTree();

    this.onSelect = this.onSelect.bind(this);
  };

  
    onSelect(selectedIndex) {
        this.setState({selected: selectedIndex});
    }
    
    sendNextQuestion() {
      // only allow user to send if something is selected... this stops DecisionTree from breaking on a -1 :)
      if (this.state.selected != -1) {
        this.decisionTree.next(this.state.selected);
        this.setState({selected: -1});
      }
    }
  
  
    render() {
      var questions = [];
      for(var item in this.decisionTree.getToAskHere().answers) {
          questions.push(
              <BetterItem 
                id={item}
                key={item}
                title={this.decisionTree.getToAskHere().answers[item]}
                onSelect={this.onSelect}
                selected={this.state.selected === item}
              />
          );
      }

      // When the decisionTrees "getToAskHere" variable is not ["a list"] but is "a string", that means
      // that we have reached a lock within the tree, change state to that lock...
      if (typeof(this.decisionTree.getToAskHere()) == "string") {
        this.props.endQuestions(this.decisionTree.getToAskHere(), () => this.decisionTree.resetTree());
      }
      
        // const images = this.props.toAsk.answers.map((answerObj, index) => {
        //   return (
        //     <Image
        //       id={index}
        //       key={index}
        //       style={styles.image}
        //       source={ answerObj.image }
        //     />
        //   )
        // })
      // const attributesBar = this.props.confirmedAttributes.map((attribute) => {
      // return <Text key={attribute}>{attribute}  </Text>
      // )}

      return (
        <ScrollView>
          <View style={styles.topBar}>
                    
                    {/* <View> */}
                      {/* <TouchableOpacity onPress={() => this.setState({ visible: true })}>
                        <AntDesign name="questioncircleo" size={24} color="black" />
                      </TouchableOpacity> */}
                      {/* <Button
                        title="Show Dialog"
                        onPress={() => {
                          this.setState({ visible: true });
                        }}
                      />
                      <Dialog
                        visible={this.state.visible}
                        dialogTitle={<DialogTitle title ="Help"/>}
                        // onTouchOutside={() => {
                        //   this.setState({ visible: false });
                        // }}
                      >
                        <DialogContent>
                          This will help you complete your quest!
                        </DialogContent>
                      </Dialog>
                    </View> */}
                    <TouchableOpacity onPress={() => this.props.changeParentState("home")}>
                        <FontAwesome name="home" size={24} color="black" />
                    </TouchableOpacity>
                    <Text>                  </Text>
                    <TouchableOpacity onPress={() => this.props.changeParentState('glossary')}>
                      <AntDesign name="questioncircleo" size={24} color="black" />
                    </TouchableOpacity>
                </View>
          <Text style={styles.questionText}>
            {this.decisionTree.getToAskHere().question}
          </Text>
            {questions}
          <TouchableOpacity
            onPress={() => this.sendNextQuestion()}
            style={[
              styles.item,
              { backgroundColor: this.state.selected ? '#9933ff' : '#9933ff' },
            ]}
          >
          <Text style={styles.title}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
        
      );
    }
  }
  
  const styles = StyleSheet.create({
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 16,
      marginVertical: 8,
      alignItems: 'center',
    },
    answersBar: {
      flex: 1,
      backgroundColor: '#dbdbda',
      height: 15
    },
    answersText: {
      fontSize: 12,
      fontWeight: '200',
      marginHorizontal: 3
    },
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    title: {
      fontSize: 30,
      justifyContent: 'flex-end'
  
    },
    questionText: {
      fontSize: 30,
      padding: 5,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: '#33ccff',
      padding: 8,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
    },
    image: {
      width: 75,
      height: 75,
      marginHorizontal: 16,
      marginVertical: 16
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  }
});