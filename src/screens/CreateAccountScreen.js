import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
	ScrollView,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import UpNavigation from '../components/UpNavigation';
import TopDesign from '../components/TopDesign';
import { useNavigation } from '@react-navigation/native';

const CreateAccountScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [validations, setValidations] = useState({
		uppercase: false,
		lowercase: false,
		number: false,
		length: false,
		specialChar: false,
	});
	const [isFocused, setIsFocused] = useState(false);
	const validateEmail = (text) => {
		setEmail(text);
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(text)) {
			setEmailError('Invalid email format');
		} else {
			setEmailError('');
		}
	};

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
		if (isPasswordValid && isConfirmValid && rememberMe) {
			// TODO: Send new password to backend
			navigation.navigate('EmailVerificationInfo', { email });
		}
	};

	return (
		<>
			<TopDesign />
			<View
				style={styles.container}
				contentContainerStyle={{ flexGrow: 1 }}>
				<UpNavigation />
				<View style={styles.content}>
					<Text style={styles.title}>Create an Account 😊</Text>
					<Text style={styles.subtitle}>
						Create your Unipaddy account to get started and gain access to all the
						features!
					</Text>
	
					<View>
						<Text style={styles.label}>Email Address</Text>
						<View
							style={[styles.inputWrapper, emailError ? styles.errorInput : {}]}>
							<Icon
								name='mail-outline'
								size={20}
								color='#9b9b9b'
								style={[styles.iconLeft, emailError ? { color: 'red' } : {}]}
							/>
							<TextInput
								style={[styles.input, emailError ? { color: 'red' } : {}]}
								placeholder='Enter Email Address'
								value={email}
								onChangeText={validateEmail}
							/>
						</View>
						{emailError ? (
							<Text style={styles.errorText}>{emailError}</Text>
						) : null}
					</View>
	
					<View>
						<Text style={styles.label}>Password</Text>
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
									style={{
										color: 'green',
										fontFamily: 'GeneralSans-Regular',
									}}>
									Passwords are a match!
								</Text>
							</View>
						)}
					</View>
	
					<View style={styles.rowBetween}>
						<View style={styles.rememberMeContainer}>
							<Checkbox
								value={rememberMe}
								onValueChange={setRememberMe}
								color={rememberMe ? '#265BFF' : undefined}
							/>
							<Text style={styles.rememberMeText}>
								By signing up you agree to our terms of service
							</Text>
						</View>
					</View>
	
					<TouchableOpacity
						style={[
							styles.buttonWrapper,
							{ opacity: emailError === '' ? 1 : 0.5 },
						]}
						disabled={emailError !== ''}
						onPress={handleSubmit}>
						<LinearGradient
							colors={['#265BFF', '#1E4CF0']}
							style={styles.button}>
							<Text style={styles.buttonText}>Sign Up</Text>
						</LinearGradient>
					</TouchableOpacity>
	
					{/* <View style={styles.orsignin}>
						<Image source={require('../../assets/images/icons/line.png')} />
						<Text style={styles.orText}>Or Sign Up Using</Text>
						<Image source={require('../../assets/images/icons/line.png')} />
					</View> */}
	
					{/* <View style={styles.socialButtonsContainer}>
						<TouchableOpacity style={styles.socialButton}>
							<Image source={require('../../assets/images/icons/google.png')} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.socialButton}>
							<Image source={require('../../assets/images/icons/facebook.png')} />
						</TouchableOpacity>
						{Platform.OS === 'ios' && (
							<TouchableOpacity style={styles.socialButton}>
								<Image source={require('../../assets/images/icons/apple.png')} />
							</TouchableOpacity>
						)}
					</View> */}
	
					<View style={styles.footerTextContainer}>
						<Text style={styles.footerText}>Already have an account?</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Login')}>
							<Text style={styles.createAccountText}> Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</>
	);
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 65,
		paddingHorizontal: 12,
		fontFamily: 'GeneralSans-Regular',
		backgroundColor: '#fff',
	},
	content: {
		paddingTop: 30,
		justifyContent: 'center',
		paddingBottom: 40,
		zIndex: 20
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

	iconLeft: {
		marginRight: 10,
	},
	iconRight: {
		marginLeft: 10,
	},
	rowBetween: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20,
	},
	errorInput: {
		borderColor: 'red',
	},

	errorText: {
		color: 'red',
		fontSize: 14,
		bottom: 16,
		// marginBottom: 5,
	},
	rememberMeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	rememberMeText: {
		marginLeft: 8,
		fontFamily: 'GeneralSans-Regular',
	},
	forgotPasswordText: {
		color: '#265BFF',
		fontSize: 14,
		textDecorationLine: 'underline',
		fontFamily: 'GeneralSans-Regular',
	},
	buttonWrapper: {
		borderRadius: 12,
		overflow: 'hidden',
		marginBottom: 20,
	},
	button: {
		paddingVertical: 15,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontFamily: 'GeneralSans-Semibold',
	},
	orsignin: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
	},
	orText: {
		textAlign: 'center',
		fontFamily: 'GeneralSans-Regular',

		color: '#9b9b9b',
	},
	socialButtonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 30,
	},
	socialButton: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#e0e0e0',
		borderRadius: 8,
	},
	footerTextContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		// marginVertical: 20,
	},
	footerText: {
		color: '#9b9b9b',
		fontFamily: 'GeneralSans-Regular',
	},
	createAccountText: {
		color: '#265BFF',
		fontFamily: 'GeneralSans-Semibold',
	},
});
