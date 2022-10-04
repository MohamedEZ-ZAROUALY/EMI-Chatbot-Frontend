import React from 'react'
import { View, Text, TouchableOpacity ,StyleSheet, Image} from 'react-native'

import { authStyles } from '../styles';
import { theme } from '../theme';

import Header from '../components/auth/Header';
import AppTextInput from '../components/auth/AppTextInput';
import AppButton from '../components/auth/AppButton';

const VerificationScreen = ({ navigation }) => {
	return (
		<View style={authStyles.container}>
			<TouchableOpacity style={styles.profile}>
				<Image style={styles.image} source={require( '../../assets/EMI.jpg')} />
			</TouchableOpacity>
			<View style={authStyles.form}>
				<AppButton 
					onPress={() => navigation.navigate("Conversation")} 
					color={theme.colors.primary} 
					title="Commencez !" 
				/>
			</View>
		
		</View>
	)
};

const styles = StyleSheet.create({
	profile: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#fff",
		flex: 4,
	},
	image: {
		height: 150,
		width: 250,
		borderRadius: 10,
		marginRight: 20
	}
});

export default VerificationScreen;