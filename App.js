import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Components/Header';

const App = ()=> {
  return(
    <View style= {styles.container}>  
      <Header title= 'Taskbook'/>
    </View>

  )
}

const styles= StyleSheet.create({
  container: {
    flex:1,
    paddingTop:20,
  },
});

export default App;