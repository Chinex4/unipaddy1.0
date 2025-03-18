import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UpNavigation from '../components/UpNavigation';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const CreateNewPasswordScreen = ({ navigation }) => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [validations, setValidations] = useState({
		uppercase: false,
		lowercase: false,
		number: false,
		length: false,
		specialChar: false,
	});

	const validatePassword = (text) => {
		setPassword(text);
		setValidations({
			uppercase: /[A-Z]/.test(text),
			lowercase: /[a-z]/.test(text),
			number: /\d/.test(text),
			length: text.length >= 8,
			specialChar: /[@$!%*?&]/.test(text),
		});
	};

	const isPasswordValid = Object.values(validations).every(Boolean);
	const isConfirmValid = password && confirmPassword === password;

	const handleSubmit = () => {
		if (isPasswordValid && isConfirmValid) {
			// TODO: Send new password to backend
			navigation.navigate('PasswordSuccessScreen');
		}
	};

	return (
		// <View style={{ flex: 1, padding: 20 }}>
		// 	<Text>Create New Password</Text>
		// 	<TextInput
		// 		placeholder='Enter Password'
		// 		secureTextEntry
		// 		onChangeText={validatePassword}
		// 	/>
		// 	<View>
		// 		<Text style={{ color: validations.uppercase ? 'green' : 'gray' }}>
		// 			✔ Uppercase
		// 		</Text>
		// 		<Text style={{ color: validations.lowercase ? 'green' : 'gray' }}>
		// 			✔ Lowercase
		// 		</Text>
		// 		<Text style={{ color: validations.number ? 'green' : 'gray' }}>
		// 			✔ Number
		// 		</Text>
		// 		<Text style={{ color: validations.length ? 'green' : 'gray' }}>
		// 			✔ 8 Characters
		// 		</Text>
		// 		<Text style={{ color: validations.specialChar ? 'green' : 'gray' }}>
		// 			✔ Special Character
		// 		</Text>
		// 	</View>

		// 	<TextInput
		// 		placeholder='Confirm Password'
		// 		secureTextEntry
		// 		onChangeText={setConfirmPassword}
		// 	/>
		// 	{!isConfirmValid && confirmPassword.length > 0 && (
		// 		<Text style={{ color: 'red' }}>Passwords do not match!</Text>
		// 	)}

		// 	<TouchableOpacity
		// 		disabled={!isPasswordValid || !isConfirmValid}
		// 		onPress={handleSubmit}
		// 		style={{
		// 			backgroundColor: isPasswordValid && isConfirmValid ? 'blue' : 'gray',
		// 			padding: 10,
		// 			borderRadius: 5,
		// 			marginTop: 10,
		// 		}}>
		// 		<Text style={{ color: 'white' }}>Continue</Text>
		// 	</TouchableOpacity>
		// </View>
		<View style={styles.container}>
			<UpNavigation />
			<Text style={styles.title}>Create New Password</Text>
			<Text style={styles.subtitle}>Create new password</Text>
			<View>
				<Text style={styles.label}>Enter Password</Text>
				<View style={styles.inputWrapper}>
					<Icon
						name='lock-closed-outline'
						size={20}
						color='#9b9b9b'
						style={styles.iconLeft}
					/>
					<TextInput
						style={styles.input}
						secureTextEntry={!isPasswordVisible}
						value={password}
						placeholder='Enter Password'
						onChangeText={validatePassword}
					/>
					<TouchableOpacity
						onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
						<Icon
							name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
							size={20}
							color='#9b9b9b'
							style={styles.iconRight}
						/>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.validationContainer}>
				<Text style={styles.validationsText}>
					{validations.uppercase ? '✔️' : '❌'} Uppercase
				</Text>
				<Text style={styles.validationsText}>
					{validations.lowercase ? '✔️' : '❌'} Lowercase
				</Text>
				<Text style={styles.validationsText}>
					{validations.number ? '✔️' : '❌'} Number
				</Text>
				<Text style={styles.validationsText}>
					{validations.length ? '✔️' : '❌'} 8 Characters
				</Text>
				<Text style={styles.validationsText}>
					{validations.specialChar ? '✔️' : '❌'} Special Character
				</Text>
			</View>

			<View>
				<Text style={styles.label}>Confirm Password</Text>
				<View style={styles.inputWrapper}>
					<Icon
						name='lock-closed-outline'
						size={20}
						color='#9b9b9b'
						style={styles.iconLeft}
					/>
					<TextInput
						style={styles.input}
						secureTextEntry={!isPasswordVisible}
						value={confirmPassword}
						placeholder='Confirm Your Password'
						onChangeText={setConfirmPassword}
					/>
					<TouchableOpacity
						onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
						<Icon
							name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
							size={20}
							color='#9b9b9b'
							style={styles.iconRight}
						/>
					</TouchableOpacity>
				</View>
				{!isConfirmValid && confirmPassword.length > 0 && (
					<Text style={{ color: 'red', marginTop: '5' }}>Passwords do not match!</Text>
				)}
			</View>

			<View style={styles.buttonWrapper}>
				<TouchableOpacity
					disabled={!isPasswordValid || !isConfirmValid}
					onPress={handleSubmit}
					style={[
						styles.button,
						{
							backgroundColor:
								isPasswordValid && isConfirmValid ? '#265BFF' : '#D0D5DD',
						},
					]}>
					<Text style={styles.buttonText}>Continue</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CreateNewPasswordScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		paddingHorizontal: 12,
		fontFamily: 'GeneralSans-Regular',
		backgroundColor: '#fff',
		justifyContent: 'center',
		// paddingTop: 30,
	},
	title: {
		fontSize: 30,
		fontFamily: 'GeneralSans-Bold',
		marginBottom: 10,
		fontFamily: 'GeneralSans-Bold',
	},
	subtitle: {
		fontSize: 16,
		color: '#9b9b9b',
		marginBottom: 30,
		fontFamily: 'GeneralSans-Regular',
	},
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#e0e0e0',
		borderRadius: 8,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	label: {
		fontSize: 16,
		fontFamily: 'GeneralSans-Semibold',
		marginBottom: 7,
	},
	input: {
		flex: 1,
		paddingVertical: 18,
		fontSize: 16,
		fontFamily: 'GeneralSans-Regular',
	},

	iconLeft: {
		marginRight: 10,
	},
	iconRight: {
		marginLeft: 10,
	},
	validationContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		gap: 5,
	},
	validationsText: {
		fontFamily: 'GeneralSans-Regular',
		padding: 10,
		backgroundColor: '#265BFF',
		color: '#fff',
		fontSize: 16,
		borderRadius: 10,
		alignItems: 'center',
	},
	buttonWrapper: {
		borderRadius: 12,
		overflow: 'hidden',
		marginBottom: 20,
        top: 100

	},
	button: {
		paddingVertical: 15,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
		fontFamily: 'GeneralSans-Regular',
	},
	
});
