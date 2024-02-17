import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../modules/auth/context';

const Navbar = () => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogOut = async () => {
		try {
			await logout();
			navigate('/auth/login');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex justify-between bg-gray-200 w-full p-4 sticky">
			<h1 className="text-center text-2xl font-bold" onClick={() => navigate('/')}>
				Firebase Google Auth & Context
			</h1>
			{user ? (
				<span>
					<button onClick={handleLogOut}>Logout</button>
					<button onClick={() => navigate('/profile')}>Profile</button>
				</span>
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
