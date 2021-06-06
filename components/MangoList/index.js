import React from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions,   } from 'react-native';
import styles from './styles';
import mango from './mangoes';
import MangoItem from '../MangoItem';



const MangoList = (props) => {


    return (
       
        <View>
      
     
            <FlatList 
            data={mango}
            renderItem={({item}) => <MangoItem mango={item} />}
            // showsVerticalScrollIndicator={false}
            // snapToAlignment={'start'}
            // decelerationRate={'fast'}
            // snapToInterval={Dimensions.get('window').height}

            />
             </View>
    
    
     
    );
};

export default MangoList;