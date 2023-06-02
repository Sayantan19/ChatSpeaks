import React, { useState } from 'react';
import { auth, firestore } from './firebase';
import { Box, Button, Container, TextField } from '@mui/material';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const initializeDoc = (userCredential) => {
		const { user } = userCredential;
		const usersCollection = firestore.collection('users');
		usersCollection.doc(user.uid).set({
			// You can add additional user data here if needed
			// For example: name, profile picture, etc.
			email: user.email,
		});

		const messagesCollection = usersCollection.doc(user.uid).collection('messages');
		messagesCollection.doc('initial').set({
			messages: [],
		});
		window.location.href('/');
	}

	const handleSignUp = () => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Sign up successful
				console.log('Sign up successful', userCredential);
				initializeDoc(userCredential);
			})
			.catch((error) => {
				// Handle sign up error
				console.log('Sign up error', error);
				alert('Sign Up error');
			});
	};
	
	return (
		<Container maxWidth="sm">
			<Box
				component="form"
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="on"
			>
				<TextField
					required
					id="email"
					label="Email (required)"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					required
					id="password"
					label="Password (required)"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button variant="outlined" onClick={handleSignUp}>
					Sign Up
				</Button>
			</Box>
		</Container>
	);
};

export default SignUp;
