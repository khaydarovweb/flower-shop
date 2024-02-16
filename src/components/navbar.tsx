import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../modules/auth/context';

const Navbar = () => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleSignOut = async () => {
		try {
			await logout();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex justify-between bg-gray-200 w-full p-4">
			<h1 className="text-center text-2xl font-bold" onClick={() => navigate('/')}>
				Firebase Google Auth & Context
			</h1>
			{user ? (
				<>
					<button onClick={handleSignOut}>Logout</button>
					<button onClick={() => navigate('/profile')}>Profile</button>
				</>
			) : (
				<>
					<Link to="/auth/login">Log in</Link>
					<Link to="/auth/register">Register</Link>
				</>
			)}
		</div>
	);
};

export default Navbar;
