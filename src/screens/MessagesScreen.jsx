import React, { useState,useEffect } from "react";
import { View, Text } from "react-native";

import ChatHeader from "../components/messages/ChatHeader";
import ChatInput from "../components/messages/ChatInput";
import MessagesList from "../components/messages/MessagesList";

import { fetchData , Options } from '../utils/fetchData.js' ;

const MessagesScreen = () => {
	const username = "EMI-BOT";
	const [date,setDate] = useState(new Date());
	const [reply, setReply] = useState("");
	const [isLeft, setIsLeft] = useState();

	const [messages, setMessages] = useState([
		{
			user: 1,
			time: date.getHours() + ":" + date.getMinutes(),
			content: "Bonjour ! C'est EMI-BOT ! Veuillez poser vos questions à moi !"
		}
	]);

	useEffect(() => {
		setDate(new Date());
		console.log(date);
	  }, [messages]);

	
	const fetchResponse = async (message) => {
			
		const response = await fetchData('http://10.72.177.131:8080/testing?questionString='+message, Options);
		const toSaveResponse = response.message ;
		setMessages( [ ...messages , {
			user: 1,
			time: hour + ":" + minute,
			content: toSaveResponse
		}])

	};

	const swipeToReply = (message, isLeft) => {
		setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
		setIsLeft(isLeft);
	};

	const closeReply = () => {
		setReply("");
	};

	return (
		<View style={{ flex: 1 }}>
			<ChatHeader
				username={username}
				onlineStatus={'Online'}
			/>
			<MessagesList onSwipeToReply={swipeToReply} messages={messages} />
			<ChatInput reply={reply} isLeft={isLeft} closeReply={closeReply} username={username}
			 messages={messages} setMessages={setMessages}  fetchResponse={fetchResponse} date={date}/>
		</View>
	);
};

export default MessagesScreen;
