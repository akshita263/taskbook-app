import React, {useState}  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const AddItem = () => {
    const [text, setText] = useState('');
    return (
        <View>
            <TextInput placeholder='Add a new Task' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>
                ADD</Text>
                          
            </TouchableOpacity>
        </View>
    )
}

export default AddItem;

const styles = StyleSheet.create({
    input:{
        padding: 10,
        height:55,
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 2,
        margin:5,
        marginBottom: 1,
    },
    btn:{
        backgroundColor: 'darkslateblue',
        padding:10,
        margin: 5,        
        marginTop: 0,
        marginBottom: 15,
    },
    btnText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    }
});
