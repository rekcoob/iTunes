import React, { useState } from 'react';
import './Home.scss';
import logo from '../assets/logo.svg';

const Home: React.FC = () => {
	const [title] = useState('React Tunes');

	return (
		<div className="home">
			<img className="logo" src={logo} alt="react logo" />

			<h1>{title}</h1>

			<p>
				Play a song that you like. <br />
				iTunes API&nbsp;
				<a
					href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api"
					target="_blank"
					rel="noopener noreferrer"
				>
					documentation
				</a>
				.
			</p>
		</div>
	);
};

export default Home;
