import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default class WriteScreen extends React.Component {
  render(){
    return (
      
        <Text style={styles.text1}>Read Section</Text>
      
    );
  }
}
const styles = StyleSheet.create({
  text1: {
    marginTop: 300,
    marginBottom:10,
    fontSize:50,
    marginLeft: 50
  }
})