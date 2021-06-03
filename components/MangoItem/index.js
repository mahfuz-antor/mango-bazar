import React from 'react';
import { StyleSheet, Text, View, ImageBackground,  } from 'react-native';
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

      </View>
      </View>
    );
};

export default MangoItem;