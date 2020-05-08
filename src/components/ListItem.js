import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';



const ListItem = ({todos, toggleTodo}) => {
    return (
        <View>
            {todos.map (todo =>
                <TouchableOpacity style={styles.container} 
                key={todo.id}
                onPress={()=> toggleTodo(todo.id)}>
                    <View style={styles.listView}>
                        <Text style={{ fontSize: 18, 
                        textDecorationLine: todo.completed ? 'line-through' : 'none'}}>
                            {todo.text }
                        </Text>
                        <Icon name="delete" size={20} color="#bbb"
                        onPress={(id)=> (prevItems =>{
                            return prevItems.filter(todo=> todo.id != id );
                          })}/>                 
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    container:{ 
        padding: 15,
        backgroundColor: '#d2edeb',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    listView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    

});
