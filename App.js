import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './Components/Header';
import ListItem from './Components/ListItem';
import AddItem from './Components/AddItem';

const App = ()=> {
  const[items, setItems] = useState([
  ]);

  const deleteItem = (id) =>{
    setItems(prevItems =>{
      return prevItems.filter(item=> item.id != id );
    });
  }

  const addItem = (text) =>{
    setItems(prevItems=> {
      return [{id: Math.random(), text}, ...prevItems];
    });
  }
 
  return(
    <View style= {styles.container}>  
      <Header title= 'Taskbook'/>
      
      <FlatList
      data={items}
      renderItem= {({item}) => 
      <ListItem 
      item= {item}
      deleteItem= {deleteItem}
      />}
      />
      <AddItem
      addItem= {addItem}
      />
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