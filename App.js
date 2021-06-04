import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import MangoItem from './components/MangoItem';
import MangoList from './components/MangoList';



export default function App() {
  return (
    <View style={styles.container}>

      <MangoList />
    
      
      {/* <MangoItem 
      name={"Himsagor"}
      price={"$1500"}
      image={require('./assets/images/m-bg-1.jpg')}
      /> */}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  
});
