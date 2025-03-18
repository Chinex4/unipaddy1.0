import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import UpNavigation from '../components/UpNavigation';

const EmailVerificationSuccessScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<UpNavigation />
			<View style={styles.content}>
				<Image
					source={require('../../assets/images/pass-success.png')}
					style={styles.image}
				/>
				<Text style={styles.title}>Email Verification Successful</Text>
				<Text style={styles.subtitle}>
					You can now continue to Home page
				</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Home')}>
					<Text style={styles.buttonText}>Continue to Home Page</Text>
					<Image
						source={require('../../assets/images/icons/arrow-right.png')}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default EmailVerificationSuccessScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: 12,
		paddingTop: 65,
		backgroundColor: '#fff',
	},
	title: { fontSize: 30, marginBottom: 10, fontFamily: 'GeneralSans-Bold', textAlign: 'center' },
	content: {
		marginTop: 30,
		width: '100%',
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
	button: {
		backgroundColor: 'blue',
		padding: 15,
		borderRadius: 8,
		width: '90%',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		top: 60,
		gap: 5
	},
	buttonText: { color: 'white', fontSize: 16, fontFamily: 'GeneralSans-Bold' },
	image: { width: '100%', marginBottom: 20 },
});
