import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

export default class WriteScreen extends React.Component {
  render(){
    return (
      <View>
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Story Hub</Text>
      </View>
      <TextInput style={styles.inputbox} 
      placeholder="Story Title" 
      /> 
      <TextInput style={styles.inputbox2} 
      placeholder="Author" 
      />  
      <TextInput multiline style={styles.inputbox3} 
      placeholder="Write" />
      <TouchableOpacity style={styles.submitb}>
            <Text style={styles.submitbuttonText}>Submit</Text>
        </TouchableOpacity>
      </View>    
    );
  }
}
const styles = StyleSheet.create({
  text1: {
    marginTop: 200,
    marginBottom:10,
  },
  inputbox: {
    width: 383,
    height: 40, 
    borderWidth: 1.5,
    borderRightWidth: 1,
    fontSize: 20,
    marginTop : 20,
    marginLeft : 5,
  },
  inputbox2: {
    width: 383,
    height: 40, 
    borderWidth: 1.5,
    borderRightWidth: 1,
    fontSize: 20,
    marginTop : 15,
    marginLeft : 5,
  },
  inputbox3:{
    width: 383,
    height: 300, 
    borderWidth: 1.5,
    borderRightWidth: 1,
    fontSize: 20,
    marginTop : 15,
    marginLeft : 5,
  },
  submitbuttonText:{
    padding: 10,
    textAlign: 'center',
    fontSize:20,
    fontWeight:'bold',
    color: 'white'
  },
  submitb:{
    backgroundColor: '#fbc020',
    width : 100,
    height: 50,
    marginLeft : 150,
    marginTop: 80,
  },
  textContainer:{
    backgroundColor: 'blue',
    marginTop: 20,
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})