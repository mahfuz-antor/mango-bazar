import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Mango Bazar.</Text>
      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159, marginBottom: 10, }} />
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 25, color: '#fff', }}> Click Here </Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '05%',
    padding: '2%',
    fontSize: 10,
  },
});
