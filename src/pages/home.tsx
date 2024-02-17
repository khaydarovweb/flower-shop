import React from 'react';
import Navbar from '../components/navbar';

const Home = () => {
	return (
		<section>
			<Navbar />
			<div>
				<h1 className="text-center text-3xl font-bold py-8">Home Page</h1>
			</div>
		</section>
	);
};

export default Home;
