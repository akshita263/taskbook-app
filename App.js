import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './Components/Header';
import ListItem from './Components/ListItem';
import AddItem from './Components/AddItem';

const App = ()=> {
  const[items, setItems] = useState([
    {id: Math.random()  , text:'Milk'},
    {id: Math.random()  , text:'Milk'},
    {id: Math.random()  , text:'Milk'},
    {id: Math.random()  , text:'Milk'}, 
  ]);

  const deleteItem = (id) =>{
    setItems(prevItems =>{
      return prevItems.filter(item=> item.id != id );
    });
  }

  
  return(
    <View style= {styles.container}>  
      <Header title= 'Taskbook'/>
      <AddItem/>
      <FlatList
      data={items}
      renderItem= {({item}) => 
      <ListItem 
      item= {item}
      deleteItem= {deleteItem}
      />}
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