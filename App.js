import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import {
	ForgotPasswordScreen,
	OTPVerificationScreen,
	VerificationInfoScreen,
} from './src/screens/ForgotPasswordScreen';
import {
	EmailOTPVerificationScreen,
	EmailVerificationInfoScreen,
} from './src/screens/EmailVerificationScreen';
import CreateNewPasswordScreen from './src/screens/CreateNewPasswordScreen';
import PasswordSuccessScreen from './src/screens/PasswordSuccessScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import EmailVerificationSuccessScreen from './src/screens/EmailVerificationSuccessScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		'GeneralSans-Bold': require('./assets/fonts/GeneralSans-Bold.otf'),
		'GeneralSans-Regular': require('./assets/fonts/GeneralSans-Regular.otf'),
		'GeneralSans-Semibold': require('./assets/fonts/GeneralSans-Semibold.otf'),
	});

	console.log('Fonts Loaded: ', fontsLoaded); // Add this line

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Splash'
					screenOptions={{ headerShown: false }}>
					<Stack.Screen
						name='Splash'
						component={SplashScreen}
					/>
					<Stack.Screen
						name='Onboarding'
						component={OnboardingScreen}
					/>
					<Stack.Screen
						name='Login'
						component={LoginScreen}
					/>
					<Stack.Screen
						name='ForgotPassword'
						component={ForgotPasswordScreen}
					/>
					<Stack.Screen
						name='VerificationInfo'
						component={VerificationInfoScreen}
					/>
					<Stack.Screen
						name='OTPVerification'
						component={OTPVerificationScreen}
					/>
					<Stack.Screen
						name='CreateNewPassword'
						component={CreateNewPasswordScreen}
					/>
					<Stack.Screen
						name='PasswordSuccessScreen'
						component={PasswordSuccessScreen}
					/>
					<Stack.Screen
						name='Register'
						component={CreateAccountScreen}
					/>
					<Stack.Screen
						name='EmailVerificationInfo'
						component={EmailVerificationInfoScreen}
					/>
					<Stack.Screen
						name='EmailOTPVerification'
						component={EmailOTPVerificationScreen}
					/>
					<Stack.Screen
						name='EmailVerificationSuccess'
						component={EmailVerificationSuccessScreen}
					/>
					
				</Stack.Navigator>
			</NavigationContainer>
	);
}
