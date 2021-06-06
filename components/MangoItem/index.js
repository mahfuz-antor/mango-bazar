import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, ScrollView, } from 'react-native';
import ButtonStyle from '../ButtonStyle';
import styles from './styles'


const MangoItem = (props) => {

    const { name, price, image, } = props?.mango;
    // console.log(image)
    return (
        <SafeAreaView>
        <ScrollView>
        <View style={styles.mangoContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />
            <View style={styles.headings}>
                <Text style={styles.heading}> {name} </Text>
                <Text style={styles.price}> {price} </Text>



            </View>

            <View style={styles.buttonContainer}>
                <ButtonStyle
                    type="primary"
                    content={"Order Now"}
                    onPress={() => {
                        console.warn("your order submitted.")
                    }}
                />

                <ButtonStyle
                    type="secondary"
                    content={"Order Cancel"}
                    onPress={() => {
                        console.warn("your order cancel.")
                    }}
                />

            </View>

        </View>
        </ScrollView>
    </SafeAreaView>
    );
};

export default MangoItem;