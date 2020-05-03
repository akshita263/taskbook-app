import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 18}}>
                    {item.text }
                </Text>
                <Icon name="delete" size={20} color="#bbb"
                onPress={()=> deleteItem(item.id)}/>                 
            </View>
        </TouchableOpacity>
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
