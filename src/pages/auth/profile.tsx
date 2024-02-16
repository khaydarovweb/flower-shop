import React from 'react';
import { useAuth } from '../../modules/auth/context';
import { useNavigate } from 'react-router-dom';

const Account = () => {
	const { logout, user } = useAuth();
  const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
      navigate('/auth/login');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-[300px] m-auto">
			<h4 className="bg-ff8f52 text-lg font-bold p-2"> User Logged In: </h4>
			{user?.email && <p className="text-xl">{user.email}</p>}

			<button className="bg-yellow-500 text-white rounded-md px-4 py-2 mt-2" onClick={handleLogout}>
				Sign Out
			</button>
		</div>
	);
};

export default Account;
