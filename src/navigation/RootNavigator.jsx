import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VerificationScreen from '../screens/VerificationScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator 
			initialRouteName="VerificationScreen" 
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="VerificationScreen" component={VerificationScreen} />
			<Stack.Screen name="Conversation" component={MessagesScreen} />
			
		</Stack.Navigator>
	)
}

export default RootNavigator;