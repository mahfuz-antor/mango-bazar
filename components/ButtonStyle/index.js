import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable,  } from 'react-native';
import styles from './style'


const ButtonStyle = (props) => {

    // const type = props.type;
    
    const backgroundColor = type === "primary" ? "gray" : "white";

    const textColor = type === "primary" ? "white" : "black";

    // const content = props.content;
    // const onPress = props.onPress;

    const {type, content, onPress} = props;

    return (
        <View style={styles.buttonContainer}>
        <Pressable 
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
        >
            <Text style={[styles.text, {color: textColor}]}>   {content} </Text>
        </Pressable>
      </View>
    );
};

export default ButtonStyle;