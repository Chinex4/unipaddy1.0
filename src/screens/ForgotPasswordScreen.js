import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ForgotPasswordScreen() {
	const navigation = useNavigation();
	const [code, setCode] = useState(['', '', '', '']);

	const handleInputChange = (value, index) => {
		const updatedCode = [...code];
		updatedCode[index] = value;
		setCode(updatedCode);
	};

	const isCodeComplete = code.every((digit) => digit !== '');

	const onboardingData = [
		{
			image: require('../../assets/images/verification.png'),
			title: 'Experience Easy Mode of Dues Payment',
			description:
				'Enjoy a fast, seamless, and hassle-free way to pay your dues with ease and convenience!',
			buttonText: 'Continue',
		},
	];

	return (
		<View style={styles.container}>
			{/* Back Button */}
			<TouchableOpacity
				style={styles.backButton}
				onPress={() => navigation.goBack()}>
				<Icon
					name='arrow-back-outline'
					size={24}
					color='#9b9b9b'
				/>
			</TouchableOpacity>

			{/* Illustration */}
			<Image
				source={require('../../assets/images/verification.png')}
				style={styles.image}
			/>

			{/* Title & Instructions */}
			<Text style={styles.title}>Verification Code</Text>
			<Text style={styles.instructions}>
				A 4-digit code has been sent to t*****@gmail.com
			</Text>

			{/* OTP Inputs */}
			<View style={styles.otpContainer}>
				{code.map((digit, index) => (
					<TextInput
						key={index}
						style={styles.otpInput}
						keyboardType='number-pad'
						maxLength={1}
						value={digit}
						onChangeText={(value) => handleInputChange(value, index)}
					/>
				))}
			</View>

			{/* Continue Button */}
			<TouchableOpacity
				style={[
					styles.continueButton,
					{ backgroundColor: isCodeComplete ? '#1E40AF' : '#d3d3d3' },
				]}
				disabled={!isCodeComplete}
				onPress={() => alert('Continue to next step!')}>
				<Text style={styles.continueButtonText}>Continue</Text>
			</TouchableOpacity>

			{/* Resend Code */}
			<TouchableOpacity>
				<Text style={styles.resendCode}>
					Didn't receive any code?{' '}
					<Text style={{ color: '#1E40AF' }}>Resend Code</Text>
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingTop: 40,
	},
	backButton: {
		marginBottom: 20,
	},
	image: {
		width: '100%',
		height: 200,
		resizeMode: 'contain',
		marginBottom: 30,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 10,
		textAlign: 'center',
	},
	instructions: {
		color: '#6b6b6b',
		textAlign: 'center',
		marginBottom: 30,
	},
	otpContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 30,
	},
	otpInput: {
		width: 50,
		height: 50,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#ccc',
		textAlign: 'center',
		fontSize: 18,
	},
	continueButton: {
		paddingVertical: 15,
		borderRadius: 10,
		alignItems: 'center',
		marginBottom: 20,
	},
	continueButtonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	resendCode: {
		color: '#6b6b6b',
		textAlign: 'center',
	},
});
