import { Image, Text, TouchableOpacity, View } from 'react-native';

const PasswordSuccessScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Image source={require('../../assets/images/pass-success.png')} />
			<Text>Password successfully changed</Text>
			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
				<Text>Return to Homepage</Text>
			</TouchableOpacity>
		</View>
	);
};
export default PasswordSuccessScreen;
