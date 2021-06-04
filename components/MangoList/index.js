import React from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions,  } from 'react-native';
import styles from './styles';
import Mango from './mangoes';
import MangoItem from '../MangoItem';


const MangoList = (props) => {


    return (
        <View>
      
            <FlatList 
            data={Mango}
            renderItem={({item}) => <MangoItem mango={item} />}
            // showsVerticalScrollIndicator={true}
            // snapToAlignment={'end'}
            // decelerationRate={'slow'}
            // snapToInterval={Dimensions.get('window').height}

            />
    
      </View>
    );
};

export default MangoList;