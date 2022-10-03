import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../theme";

const ChatHeader = ({ username, bio, picture, onlineStatus}) => {
	const navigation = useNavigation();

	const onPress = ( ) => {
		window.open('https://www.emi.ac.ma/', '_blank');
	};
	return (
		<View style={styles.container}>
			<View style={styles.profileOptions}>
				<TouchableOpacity style={styles.profile}>
					<Image style={styles.image} source={require( '../../../assets/EMI.jpg')} />
					<View style={styles.usernameAndOnlineStatus}>
						<Text style={styles.username}>{username}</Text>
						<Text style={styles.onlineStatus}>{onlineStatus}</Text>
					</View>
				</TouchableOpacity>
				
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: theme.colors.primary,
		paddingTop: 40,
		paddingBottom: 10,
	},
	backButton: {
		alignSelf: "center",
		paddingHorizontal: 10,
	},
	profileOptions: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#fff",
		flex: 4,
	},
	image: {
		height: 75,
		width: 120,
		borderRadius: 10,
		marginRight: 20
	},
	usernameAndOnlineStatus: {
		flexDirection: "column",
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	username: {
		color: theme.colors.white,
		fontSize: 18,
		fontWeight: "bold",
	},
	onlineStatus: {
		color: theme.colors.white,
		fontSize: 16,
	},
	options: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
});

export default ChatHeader;
