import React from 'react';
import Navbar from '../components/navbar';
import { default as Sec1 } from "./home/sec1";

const Home = () => {
	return (
		<section>
			<Navbar />
			<Sec1/>
		</section>
	);
};

export default Home;
