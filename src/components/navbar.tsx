import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../modules/auth/context';

import { FaCartShopping } from 'react-icons/fa6';
import { VscAccount } from 'react-icons/vsc';

const Navbar = () => {
	const { user } = useAuth();
	const navigate = useNavigate();

	return (
		<div className="flex justify-between items-center bg-white w-full p-5 sticky">
			<h1 className="text-center text-2xl font-bold" onClick={() => navigate('/')}>
				<span className="text-[#FF8F52]">Flower</span> Shop
			</h1>
			<nav>
				<ul className="flex items-center gap-6">
					<li className="text-[#ff8f52] text-[24px]">Home</li>
					<li className="text-[24px]">Products</li>
					<li className="text-[24px]">About</li>
					<li className="text-[24px]">Blog</li>
				</ul>
			</nav>
			{user ? (
				<span className="flex items-center gap-5">
					<button
						className="p-2 bg-[#ff8f52] text-white rounded-md"
						onClick={() => navigate('/cart')}
					>
						<FaCartShopping size={28} />
					</button>
					<button
						className="p-2 bg-[#ff8f52] text-white rounded-md"
						onClick={() => navigate('/profile')}
					>
						<VscAccount size={28} />
					</button>
				</span>
			) : (
				<span className="flex items-center gap-5">
					<button>
						<Link to="/auth/login">Log in</Link>
					</button>
					<button>
						<Link to="/auth/register">Register</Link>
					</button>
				</span>
			)}
		</div>
	);
};

export default Navbar;
