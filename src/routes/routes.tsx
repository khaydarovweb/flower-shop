import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar';
import Protected from './protected';
import { useAuth } from '../modules/auth/context';
import Profile from '../pages/auth/profile';
import Home from '../pages/home';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';

function App() {
	const { user } = useAuth();
	const isAllowed = !user;
	console.log('hasUser: ', isAllowed);

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<Protected allowed={isAllowed} to="/" />}>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>

				<Route path="/profile" element={<Protected allowed={!isAllowed} to="/profile" />} />

				{/* Wildcard route for unmatched paths */}
				<Route path="*" element={<Navigate to="/auth/login" />} />
			</Routes>
		</div>
	);
}

export default App;
