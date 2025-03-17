import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const OnboardingScreen = ({ navigation }) => {
	const onboardingData = [
		{
			image: require('../../assets/images/onb1.png'),
			title: 'Experience Easy Mode of Dues Payment',
			description:
				'Enjoy a fast, seamless, and hassle-free way to pay your dues with ease and convenience!',
			buttonText: 'Continue',
		},
		{
			image: require('../../assets/images/onb2.png'),
			title: 'Sign up for Class Attendance Effortlessly',
			description:
				'Register for classes with a fast, hassle-free, and accurate system.',
			buttonText: 'Continue',
		},
		{
			image: require('../../assets/images/onb3.png'),
			title: 'Calculate your GPA & CGPA Seamlessly',
			description: 'Easily calculate your GPA & CGPA with an accurate tool.',
			buttonText: 'Get Started',
		},
	];

	const [currentIndex, setCurrentIndex] = React.useState(0);

	const handleNext = () => {
		if (currentIndex < onboardingData.length - 1) {
			setCurrentIndex(currentIndex + 1);
		} else {
			navigation.replace('Login');
		}
	};

	const handleSkip = () => {
		navigation.replace('Login');
	};

	return (
		<View style={styles.container}>
			<View style={styles.skipContainer}>
				{/* Navigation Dots */}
				<View style={styles.dotsContainer}>
					{onboardingData.map((_, index) => (
						<View
							key={index}
							style={[styles.dot, currentIndex === index && styles.activeDot]}
						/>
					))}
				</View>
				{/* Skip Button */}
				<TouchableOpacity
					onPress={handleSkip}
					style={styles.skipButton}>
					<Text style={styles.skipText}>Skip</Text>
				</TouchableOpacity>
			</View>

			<Image
				source={onboardingData[currentIndex].image}
				style={styles.image}
			/>
			<Text style={styles.title}>{onboardingData[currentIndex].title}</Text>
			<Text style={styles.description}>
				{onboardingData[currentIndex].description}
			</Text>

			<TouchableOpacity
				onPress={handleNext}
				style={styles.buttonWrapper}>
				<LinearGradient
					colors={['#265BFF', '#1E4CF0']}
					start={{ x: 0.5, y: 0 }}
					end={{ x: 0.5, y: 1 }}
					style={styles.button}>
					<View style={styles.buttonTextWrapper}>
						<Text style={styles.buttonText}>
							{onboardingData[currentIndex].buttonText}
						</Text>
						<Image
							source={require('../../assets/images/icons/arrow-right.png')}
						/>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		</View>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	// skipButton: {
	// 	position: 'absolute',
	// 	top: 50,
	// 	right: 20,
	// },
	skipText: {
		color: '#9b9b9b',
		fontSize: 16,
		fontFamily: 'GeneralSans-Regular',
	},
	image: {
		width: 300,
		height: 300,
		resizeMode: 'contain',
		marginBottom: 30,
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 15,
		fontFamily: 'GeneralSans-Bold',
	},
	description: {
		fontSize: 16,
		color: '#9b82b3',
		textAlign: 'center',
		marginBottom: 40,
		fontFamily: 'GeneralSans-Regular',
	},
	skipContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		position: 'absolute',
		top: 60,
		// paddingHorizontal: 20,
	},	
	dotsContainer: {
		flexDirection: 'row',
		alignItems:'center',
		// marginBottom: 20,
	},
	dot: {
		width: 6,
		height: 14,
		borderRadius: 4,
		backgroundColor: '#ccc',
		marginHorizontal: 4,
	},
	activeDot: {
		height: 20,
		backgroundColor: '#265BFF',
		// width: 16,
	},
	buttonWrapper: {
		width: '100%',
		borderRadius: 12,
		overflow: 'hidden',
	},
	button: {
		width: '100%',
		paddingVertical: 15,
		alignItems: 'center',
		borderRadius: 12,
	},
	buttonTextWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
		fontFamily: 'GeneralSans-Regular',
	},
});
