import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import AddItem from './containers/AddItem';
import Visible from './containers/Visible'


class TodoApp extends Component {

  state={
    todos: [],
    visibility: "SHOW_ALL_TODO"
  }

  render(){
    return(
        <View style= {styles.container}>  
            <Header title= 'Taskbook'/>
            <AddItem />
            <View>
              <Visible />
            </View>
        </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {
    flex:1,
    paddingTop:0,
    backgroundColor: '#fffef9',
  },
});

export default TodoApp;