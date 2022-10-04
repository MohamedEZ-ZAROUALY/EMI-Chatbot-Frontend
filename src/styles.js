import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const authStyles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: theme.colors.primary,
		justifyContent: 'center',
		alignItems: 'center'
	},
	form: {
		flex: 2,
		width : '80%',
		borderRadius : 20
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center'
	}
});

export const inputStyles = StyleSheet.create({
	mainContainer: {
		alignSelf: 'center',
		height: 50,
		backgroundColor: theme.colors.white,
		flexDirection: 'row',
		marginHorizontal: 30,
		paddingHorizontal: 10,
		marginVertical: 10
	}
});

export const fabStyles = StyleSheet.create({
	style: {
		alignItems: "center",
		justifyContent: "center",
		width: 60,
		height: 60,
		position: 'absolute',
		bottom: 10,
		right: 10,
		backgroundColor: theme.colors.white,
		borderRadius: 100,
		elevation: 5,
		shadowColor: theme.colors.primary,
		shadowOpacity: 0.4,
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 2 }
	}
})