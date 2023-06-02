import React, { useEffect, useState } from 'react';
import { auth, firestore } from './firebase';
import { Box, Button, Container, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'

export default function Chat() {
	const [chatbotResponse, setchatbotResponse] = useState('');
	const [message, setMessage] = useState('');
	const [uid, setUID] = useState(undefined);

	useEffect(() => {
		// Add an observer to listen for authentication state changes
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				// User is signed in
				const userId = user.uid;
				// Do something with the user ID, such as storing it in state or using it in your component
				setUID(userId);
			} else {
				// User is signed out
				console.log('User is signed out');
			}
		});

		// Clean up the observer when the component unmounts
		return () => unsubscribe();
	}, []);

	console.log('User ID:', uid);
	const usersCollection = firestore.collection('users');
	const messagesCollection = usersCollection.doc(uid).collection('messages');
	console.log(messagesCollection);

	const handleOnChange = (e) => {
		e.preventDefault();
		setMessage(e.target.value);
	};

	const handleSendMessage = async () => {
		try {
			const response = await axios.post("/chatres",{"message": message});
			console.log(response)			
			console.log(chatbotResponse);

			// Step 2: Store user message and chatbot response in Firestore
			await messagesCollection.add({
				content: message,
				timestamp: new Date(),
				sender: uid,
			});

			await messagesCollection.add({
				content: chatbotResponse,
				timestamp: new Date(),
				sender: 'chatbot',
			});

			console.log('Message sent and stored successfully');
			setMessage('');
		} catch (error) {
			console.error('Error sending message and storing data:', error);
		}
	};

	return (
		<Container>
			<h1>Hello World</h1>
			<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
				<TextField
					fullWidth
					id="outlined-multiline-flexible"
					label="Type your message here"
					multiline
					maxRows={4}
					onChange={handleOnChange}
					value={message}
				/>
				<Button onClick={handleSendMessage}><SendIcon variant="medium" color='action' /></Button>
			</Box>
		</Container>
	);
}