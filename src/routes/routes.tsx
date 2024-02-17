import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar';
import Protected from './protected';
import { useAuth } from '../modules/auth/context';
import Profile from '../pages/auth/profile';
import Home from '../pages/home';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';

function Router() {
	const { user } = useAuth();
	const isAllowed = !user;

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/auth" element={<Protected allowed={isAllowed} to="/" />}>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>

			{user ? (
				<Route path="/profile" element={<Profile />} />
			) : (
				<Route path="/profile" element={<Navigate to="/auth/login" />} />
			)}

			<Route path="*" element={<Navigate to="/auth/login" />} />
		</Routes>
	);
}

export default Router;
