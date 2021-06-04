import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
const Header = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require('../../assets/favicon.png')} />
			<Image style={styles.menu} source={require('../../assets/favicon.png')} />
		</View>
	);
};

export default Header;
