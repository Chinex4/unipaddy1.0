import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const UpNavigation = ({ displayName = 'Guest' }) => {
	const navigation = useNavigation();

	const handleGoBack = () => {
		if (navigation.canGoBack()) {
			navigation.goBack();
		} else {
			navigation.navigate('Onboarding'); // Replace 'Home' with your default screen
		}
	};

	return (
		<View style={styles.upNavigation}>
			<TouchableOpacity onPress={handleGoBack}>
				<View style={styles.arrowContainer}>
					<Ionicons
						name='arrow-back-outline'
						size={20}
						color='#9b9b9b'
					/>
				</View>
			</TouchableOpacity>
			<View>
				<Image source={require('../../assets/images/logo2.png')} />
			</View>
		</View>
	);
};

export default UpNavigation;

const styles = StyleSheet.create({
	arrowContainer: {
		backgroundColor: '#eee',
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	upNavigation: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		zIndex: 20
	},
});
