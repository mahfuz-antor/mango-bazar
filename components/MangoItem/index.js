import React from 'react';
import { StyleSheet, Text, View, ImageBackground,  } from 'react-native';
import ButtonStyle from '../ButtonStyle';
import styles from './styles'


const MangoItem = (props) => {
    return (
        <View style={styles.mangoContainer}>
        <ImageBackground
        source={require('../../assets/images/bg-1.jpg')}
        style={styles.image}
        />
        <View style={styles.headings}>
        <Text style={styles.heading}>Mango Names:</Text>
        <Text style={styles.price}>Price: </Text>

        <ButtonStyle 
        type="primary" 
        content= {"Order Now"}
        onPress={() => {
            console.warn( "your order submitted.")
        }}
        />

        <ButtonStyle 
        type="secondary" 
        content= {"Order Cancel"}
        onPress={() => {
            console.warn("your order cancel.")
        }}
        />

      </View>
      </View>
    );
};

export default MangoItem;