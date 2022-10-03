import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VerificationScreen from '../screens/VerificationScreen';
import MessagesScreen from '../screens/MessagesScreen';
import OnCallScreen from '../screens/OnCallScreen';

import HomeNavigator from './HomeNavigator';
import Header from '../components/common/Header';


const Stack = createStackNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator 
			initialRouteName="Conversation" 
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="VerificationScreen" component={VerificationScreen} />
			<Stack.Screen name="Conversation" component={MessagesScreen} />
			
		</Stack.Navigator>
	)
}

export default RootNavigator;