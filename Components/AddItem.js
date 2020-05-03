import React, {useState}  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const AddItem = ({title, addItem}) => {
    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

    return (
        <View>
            <TextInput placeholder='Add a new Task' style={styles.input} onChangeText={onChange}/>
            <TouchableOpacity style={styles.btn}
            onPress= {() => addItem(text)}>
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
        margin:10,
        marginBottom: 2,
        marginTop: 10
    },
    btn:{
        backgroundColor: '#35a79c',
        padding:10,
        margin: 10,        
        marginTop: 2,
        marginBottom: 15,
    },
    btnText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    }
});
