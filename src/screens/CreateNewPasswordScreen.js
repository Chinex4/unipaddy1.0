import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import UpNavigation from '../components/UpNavigation';
import TopDesign from '../components/TopDesign';
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
	const [isFocused, setIsFocused] = useState(false);

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
		<>
			<TopDesign />
			<View style={styles.container}>
				<UpNavigation />
				<View style={styles.content}>
					<Text style={styles.title}>Create New Password</Text>
					<Text style={styles.subtitle}>Create new password</Text>
					<View>
						<Text style={styles.label}>Enter Password</Text>
						<View style={[
								styles.inputWrapper,
								{
									borderColor: isFocused ? '#265BFF' : '#eee',
									borderWidth: 1,
								},
							]}>
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
								onFocus={() => setIsFocused(true)}
								onBlur={() => setIsFocused(false)}
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
						<View
							style={[
								styles.inputWrapper,
								{
									borderColor: isFocused ? '#265BFF' : '#eee',
									borderWidth: 1,
								},
							]}>
							<Icon
								name='lock-closed-outline'
								size={20}
								color='#9b9b9b'
								style={styles.iconLeft}
							/>
							<TextInput
								style={[styles.input, {}]}
								secureTextEntry={!isPasswordVisible}
								value={confirmPassword}
								placeholder='Confirm Your Password'
								onChangeText={setConfirmPassword}
								onFocus={() => setIsFocused(true)}
								onBlur={() => setIsFocused(false)}
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
							<View style={{ bottom: 16 }}>
								<Text style={{ color: 'red', fontFamily: 'GeneralSans-Regular' }}>
									Passwords do not match!
								</Text>
							</View>
						)}
						{isConfirmValid && (
							<View style={{ bottom: 16 }}>
								<Text
									style={{ color: 'green', fontFamily: 'GeneralSans-Regular' }}>
									Passwords are a match!
								</Text>
							</View>
						)}
					</View>
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
		</>
	);
};

export default CreateNewPasswordScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		paddingTop: 65,
		paddingHorizontal: 12,
		fontFamily: 'GeneralSans-Regular',
		backgroundColor: '#fff',
		// justifyContent: 'center',
		// paddingTop: 30,
	},
	content: {
		marginTop: 30,
		zIndex:20
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
		// width: '90%',
		borderRadius: 12,
		overflow: 'hidden',
		marginTop: 60,
		top: 100,
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
