import React, { useState, useEffect } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from './utils/firebase';

function App() {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
			console.log(user);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
			console.log(user);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	return (
		<div className="text-center p-4">
			<div className="m-2">
				<h3 className="text-lg font-bold"> Register User </h3>
				<input
					className="bg-white text-black border border-gray-500 rounded-md p-2 outline-none"
					placeholder="Email..."
					onChange={(event) => {
						setRegisterEmail(event.target.value);
					}}
				/>
				<input
					className="bg-white text-black border border-gray-500 rounded-md p-2 outline-none"
					placeholder="Password..."
					onChange={(event) => {
						setRegisterPassword(event.target.value);
					}}
				/>

				<button className="bg-yellow-500 text-white rounded-md px-4 py-2 mt-2" onClick={register}>
					{' '}
					Create User
				</button>
			</div>

			<div className="m-2">
				<h3 className="text-lg font-bold"> Login </h3>
				<input
					className="bg-white text-black border border-gray-500 rounded-md p-2 outline-none"
					placeholder="Email..."
					onChange={(event) => {
						setLoginEmail(event.target.value);
					}}
				/>
				<input
					className="bg-white text-black border border-gray-500 rounded-md p-2 outline-none"
					placeholder="Password..."
					onChange={(event) => {
						setLoginPassword(event.target.value);
					}}
				/>

				<button className="bg-yellow-500 text-white rounded-md px-4 py-2 mt-2" onClick={login}>
					{' '}
					Login
				</button>
			</div>

			<h4 className="bg-ff8f52 text-lg font-bold p-2"> User Logged In: </h4>
			{user?.email && <p className="text-xl">{user.email}</p>}

			<button className="bg-yellow-500 text-white rounded-md px-4 py-2 mt-2" onClick={logout}>
				{' '}
				Sign Out{' '}
			</button>
		</div>
	);
}

export default App;
