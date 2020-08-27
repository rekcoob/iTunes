import React, { useState } from 'react';

// children
import TunesSearchForm from '../components/tunes/TunesSearchForm';
import TunesList from '../components/tunes/TunesList';

// component
const Tunes: React.FC = () => {
	// state
	const [searchQuery, setSearchQuery] = useState('');
	const [songs, setSongs] = useState([
		{ id: 1, artist: 'Great Artist', name: 'Great Song' },
		{ id: 2, artist: 'Grtist', name: 'Greang' },
		{ id: 3, artist: 'Artist', name: 'Gr' },
	]);

	// callbacks
	const handleSearchFormSubmit = (data: string) => {
		const newSong = {
			id: Math.max(...songs.map((s) => s.id)) + 1,
			artist: data,
			name: data,
		};
		setSongs([...songs, newSong]);
	};

	const handleInputChange = (data: string) => {
		setSearchQuery(data);
	};

	// template
	return (
		<article className="tunes">
			<h1>Tunes</h1>
			<TunesSearchForm
				searchQuery={searchQuery}
				onInputChange={handleInputChange}
				onSearchFormSubmit={handleSearchFormSubmit}
			/>
			<TunesList songs={songs} />
		</article>
	);
};

export default Tunes;
