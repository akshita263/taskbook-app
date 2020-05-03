import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    return (
        <View style= {styles.container}> 
            <Text style= {styles.text}>{props.title}</Text>
        </View>
    )
}

export default Header;

const styles= StyleSheet.create({
    container:{
      height: 80,
      padding:13,
      alignItems:'center',
      backgroundColor: '#35a79c',
      marginBottom:15,
    },
    text: {
      color:  'white',
      fontSize: 42,
      textAlign: 'center',
    },
  });

