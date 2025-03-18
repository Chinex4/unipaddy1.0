import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TopDesign = () => {
	return (
		<ImageBackground
			style={styles.image}
			source={require('../../assets/images/topdesign.png')}></ImageBackground>
	);
};

export default TopDesign;

const styles = StyleSheet.create({
	image: {
		width: '110%',
		height: '50%',
		padding: 10,
		position: 'absolute',
		zIndex: 10,
		top: 0,
	},
});
