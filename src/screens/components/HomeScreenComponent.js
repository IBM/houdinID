//start the whole dang thing!

import React from 'react';
import ReactDOM from 'react-dom';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';


//this view will need to become a selector for subsequent views instead of nav to next screen
//parent 
class HomeScreenComponent extends React.Component {
  constructor(props) {
   super(props);
  };

  render() {
    return (
      <View>
        
        {/* <TouchableOpacity>
          <Feather name="menu" size={24} color="black" style={styles.menuIconStyle} />
        </TouchableOpacity> */}
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>houdinID</Text>
          <Text style={styles.subHeaderStyle}>Lock ID for Lockpickers</Text>
          <Feather name="key" size={60} color="black" style={styles.keyIconStyle} />
        </View>

        <View>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => this.props.changeParentState("question")}
          >
            <Text style={styles.startTextStyle}>Start Lock ID</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => this.props.changeParentState("search")}
          >
            <Text style={styles.buttonTextStyle}>Explore Locks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bypassButton}
            onPress={() => this.props.changeParentState("bypass")}
          >
            <Text style={styles.buttonTextStyle}>Bypass Methods</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.moreButton}
            onPress={() => this.props.changeParentState("more")}
          >
            <Text style={styles.buttonTextStyle}>More</Text>
          </TouchableOpacity>

          

          

          

        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: ConstantSourceNode.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  titleContainer: {
    // flex: 1,
    alignItems: "center",
    paddingTop: 60,
    // marginVertical: 10,
  },
  buttonContainer: {
    flex: 3,
    flexDirection: "column",

  },
  menuIconStyle: {
    alignItems: "flex-start",
    marginVertical: 10,
  },
  titleStyle: {
    fontSize: 45,
    fontWeight: "bold",
  },
  subHeaderStyle: {
    fontSize: 15
},
keyIconStyle: {
  alignItems: "center",
  justifyContent: "center",
  marginVertical: 10,
  padding: 10,
},
startTextStyle: {
  fontSize: 25,
  // fontWeight: "bold",
},
buttonTextStyle: {
  fontSize: 18,
  // fontWeight: "bold",
},
startButton: {
  alignItems: "center",
  backgroundColor: "#ff3366",
  padding: 25,
  marginVertical: 8,
  marginHorizontal: 16,
  borderRadius: 10,
},
bypassButton: {
  alignItems: "center",
  backgroundColor: "#ffcc33", ///
  padding: 10,
  marginVertical: 8,
  marginHorizontal: 16,
  borderRadius: 10,
},
exploreButton: {
  alignItems: "center",
  backgroundColor: "#ff9933", ///
  padding: 10,
  marginVertical: 8,
  marginHorizontal: 16,
  borderRadius: 10,
},
moreButton: {
  alignItems: "center",
  backgroundColor: "#ffe400",
  padding: 10,
  marginVertical: 8,
  marginHorizontal: 16,
  borderRadius: 10,
},

});

export default HomeScreenComponent;



