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
      height: 60,
      padding:10,
      alignItems:'center',
      backgroundColor: 'darkslateblue',
    },
    text: {
      color:  'white',
      fontSize: 32,
      textAlign: 'center',
    },
  });

