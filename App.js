import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
var name= "Hasnain";
class SoftwareConstrunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"MUAHAMMAD ANAS",
    Department:"UIIT",
   Degree:"BS Software engineering",
   arid:"19-arid-1248"
    }
  }

 render() {
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.hiText}>{"PMAS UAAR"}</Text>
      <Image source={require('./anas.jpg')} 
      style={{width:200,height:300,marginLeft:100,marginTop:30}}
      />
      <View style={styles.content}>
        <View style={styles.textWrapper}>
        
          <Text style={styles.hiText}>Name : {this.state.name}</Text>
          <Text style={styles.hiText}>Arid : {this.state.arid}</Text>
          <Text style={styles.hiText}>Department : {this.state.Department}</Text>
          <Text style={styles.hiText}>Degree : {this.state.Degree} </Text>
        </View>

        

      
      </View>
    </SafeAreaView>
    
  );
}
}



const TEXT = {
  color: "#fff",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C2321",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 30,
    marginBottom: 30,
  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 15,
    lineHeight: 30,
  },
  form: {
    marginBottom: 30,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 30,
    left: 22,
    zIndex: 10,
  },
  inputfield: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    marginTop:10,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#8d015a",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonLoginText: {
    ...TEXT,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default SoftwareConstrunction;
