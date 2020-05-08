import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import {connect} from 'react-redux';
import { addtodo } from '../actions/index'

class AddItem extends Component{

    state={
        text: '',
    }

    addItem =(text) => {
        this.props.dispatch(addtodo(text))
        this.setState({text: ''})
    }
    
    render(){
    return (
        <View>
            <TextInput 
            placeholder='Add a new Task' 
            style={styles.input} 
            value= {this.state.text}
            onChangeText={(text)=> this.setState({text})}/>
            <TouchableOpacity style={styles.btn}
                onPress= {() => this.addItem(this.state.text)}>
                    <Text style={styles.btnText}>
                    ADD</Text>              
            </TouchableOpacity>
            
        </View>
    )
    }
}

export default connect()(AddItem);

const styles = StyleSheet.create({
    input:{
        padding: 10,
        height:55,
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 0.2,
        margin:10,
        marginBottom: 2,
        marginTop: 5,
        backgroundColor: '#eee',
    },
    btn:{
        backgroundColor: '#35a79c',
        padding:10,
        margin: 10,        
        marginTop: 2,
        marginBottom: 15,
        height: 40
    },
    btnText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    }
});
