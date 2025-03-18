import React, { useState, useRef } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet,
	Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UpNavigation from '../components/UpNavigation';
import TopDesign from '../components/TopDesign';

const ForgotPasswordScreen = () => {
	const navigation = useNavigation();
	const [email, setEmail] = useState('');
	const handleNavigate = () => {
		if (email === '') {
			alert('Please enter your email address.');
		} else {
			navigation.navigate('VerificationInfo', { email });
		}
	};
	return (
		<>
			<TopDesign />
			<View style={styles.container}>
				<UpNavigation />
				<View style={styles.content}>
					<Text style={styles.title}>Forgot Password</Text>
					<Text style={styles.subtitle}>
						Enter your email address to receive a verification code.
					</Text>
					<TextInput
						style={styles.input}
						placeholder='Enter your email'
						keyboardType='email-address'
						autoCapitalize='none'
						value={email}
						onChangeText={setEmail}
					/>
					<TouchableOpacity
						style={styles.button}
						onPress={handleNavigate}>
						<Text style={styles.buttonText}>Continue</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

const VerificationInfoScreen = ({ route }) => {
	const navigation = useNavigation();
	const { email } = route.params;

	return (
		<>
			<View style={styles.container}>
				<UpNavigation />
				<View style={styles.content}>
					<Image
						source={require('../../assets/images/verification.png')}
						style={styles.image}
					/>
					<Text style={styles.title}>Verification Code</Text>
					<Text style={styles.subtitle}>
						A 4-digit code has been sent to {email}
					</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate('OTPVerification', { email })}>
						<Text style={styles.buttonText}>Continue</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

const OTPVerificationScreen = ({ route }) => {
	const navigation = useNavigation();
	const [otp, setOtp] = useState(['', '', '', '']);
	const inputRefs = [useRef(), useRef(), useRef(), useRef()];

	const handleOtpChange = (text, index) => {
		if (text.length === 1 && index < 3) inputRefs[index + 1].current.focus();
		const newOtp = [...otp];
		newOtp[index] = text;
		setOtp(newOtp);
	};
	const handleOTPVerification = () => {
		if (otp.join('').length === 4) {
		  // Assume OTP is verified
		  navigation.navigate('CreateNewPassword');
		}
	  };
	  

	return (
		<>
			<TopDesign />
			<View style={styles.container}>
				<UpNavigation />
				<View style={styles.content}>
					<Text style={styles.title}>Enter Verification Code</Text>
					<Text style={styles.subtitle}>
						Enter the code sent to {route.params.email}
					</Text>
					<View style={styles.otpContainer}>
						{otp.map((digit, index) => (
							<TextInput
								key={index}
								ref={inputRefs[index]}
								style={styles.otpInput}
								keyboardType='numeric'
								maxLength={1}
								value={digit}
								onChangeText={(text) => handleOtpChange(text, index)}
							/>
						))}
					</View>
					<TouchableOpacity
						style={[
							styles.button,
							{ opacity: otp.join('').length === 4 ? 1 : 0.5 },
						]}
						disabled={otp.join('').length !== 4}
						onPress={handleOTPVerification}>
						<Text style={styles.buttonText}>Continue</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.footerTextContainer}>
					<Text style={styles.footerText}>Didn't receive any code?</Text>
					<TouchableOpacity>
						<Text style={styles.createAccountText}> Resend</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: 12,
		paddingTop: 65,
		backgroundColor: '#fff',
	},
	title: { fontSize: 30, marginBottom: 10, fontFamily: 'GeneralSans-Bold' },
	content: {
		marginTop: 30,
		width: '100%',
		zIndex: 20,
		// position: 'relative',
		alignItems: 'center',
	},
	subtitle: {
		fontSize: 16,
		fontFamily: 'GeneralSans-Regular',
		color: 'gray',
		marginBottom: 20,
		textAlign: 'center',
	},
	input: {
		width: '90%',
		padding: 20,
		fontFamily: 'GeneralSans-Regular',
		fontSize: 16,
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 20,
	},
	button: {
		backgroundColor: 'blue',
		padding: 15,
		borderRadius: 8,
		width: '90%',
		alignItems: 'center',
		position: 'absolute',
		top: 550,
	},
	buttonText: { color: 'white', fontSize: 16, fontFamily: 'GeneralSans-Bold' },
	image: { width: '100%', marginBottom: 20 },
	otpContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
		marginBottom: 20,
	},
	otpInput: {
		borderWidth: 1,
		textAlign: 'center',
		fontSize: 20,
		fontFamily: 'GeneralSans-Regular',
		width: 50,
		height: 50,
		borderRadius: 8,
	},
	footerContainer: {},
	footerTextContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
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

export { ForgotPasswordScreen, VerificationInfoScreen, OTPVerificationScreen };
