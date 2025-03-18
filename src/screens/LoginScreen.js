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
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import UpNavigation from '../components/UpNavigation';
import { useNavigation } from '@react-navigation/native';
import TopDesign from '../components/TopDesign';

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const navigate = useNavigation();

	const handleLogin = () => {
		// Handle login logic here
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<SafeAreaView style={{ flex: 1 }}>
				<TopDesign />
				<KeyboardAvoidingView
					behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
					style={styles.container}>
					<UpNavigation />
					<View style={styles.container}>
						<Text style={styles.title}>Hi, Welcome Back 👋</Text>
						<Text style={styles.subtitle}>
							Hello Davis, we missed you. Kindly sign in to get access to your
							account.
						</Text>

						<View>
							<Text style={styles.label}>Email Address</Text>
							<View style={styles.inputWrapper}>
								<Icon
									name='mail-outline'
									size={20}
									color='#9b9b9b'
									style={styles.iconLeft}
								/>
								<TextInput
									style={styles.input}
									placeholder='Enter Email Address'
									value={email}
									onChangeText={setEmail}
								/>
							</View>
						</View>

						<View>
							<Text style={styles.label}>Password</Text>
							<View style={styles.inputWrapper}>
								<Icon
									name='lock-closed-outline'
									size={20}
									color='#9b9b9b'
									style={styles.iconLeft}
								/>
								<TextInput
									style={styles.input}
									placeholder='Password'
									secureTextEntry={!isPasswordVisible}
									value={password}
									onChangeText={setPassword}
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

						<View style={styles.rowBetween}>
							<View style={styles.rememberMeContainer}>
								<Checkbox
									value={rememberMe}
									onValueChange={setRememberMe}
									color={rememberMe ? '#265BFF' : undefined}
								/>
								<Text style={styles.rememberMeText}>Remember Me</Text>
							</View>

							<TouchableOpacity
								onPress={() => navigation.navigate('ForgotPassword')}>
								<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
							</TouchableOpacity>
						</View>

						<TouchableOpacity
							style={styles.buttonWrapper}
							onPress={handleLogin}>
							<LinearGradient
								colors={['#265BFF', '#1E4CF0']}
								style={styles.button}>
								<Text style={styles.buttonText}>Login</Text>
							</LinearGradient>
						</TouchableOpacity>

						<View style={styles.orsignin}>
							<Image source={require('../../assets/images/icons/line.png')} />
							<Text style={styles.orText}>Or Sign In Using</Text>
							<Image source={require('../../assets/images/icons/line.png')} />
						</View>

						<View style={styles.socialButtonsContainer}>
							<TouchableOpacity style={styles.socialButton}>
								<Image
									source={require('../../assets/images/icons/google.png')}
								/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.socialButton}>
								<Image
									source={require('../../assets/images/icons/facebook.png')}
								/>
							</TouchableOpacity>
							{Platform.OS === 'ios' && (
								<TouchableOpacity style={styles.socialButton}>
									<Image
										source={require('../../assets/images/icons/apple.png')}
									/>
								</TouchableOpacity>
							)}
						</View>

						<View style={styles.footerTextContainer}>
							<Text style={styles.footerText}>Don't have an account?</Text>
							<TouchableOpacity onPress={() => navigation.navigate('Register')}>
								<Text style={styles.createAccountText}> Create One</Text>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		paddingHorizontal: 12,
		fontFamily: 'GeneralSans-Regular',
		backgroundColor: '#fff',
		justifyContent: 'center',
		paddingTop: 30,
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
		zIndex: 40
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
		fontWeight: '600',
		fontFamily: 'GeneralSans-Regular',
	},
	orsignin: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
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
