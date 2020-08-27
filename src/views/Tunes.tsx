import React, { useState } from 'react';
import { Song } from '../types';
import axios from 'axios';
import TunesSearchForm from '../components/tunes/TunesSearchForm';
import TunesList from '../components/tunes/TunesList';

interface SongFromITunes {
	trackId: number;
	artistName: string;
	previewUrl: string;
	artworkUrl100?: string;
	trackName: string;
	collectionName: string;
	kind?: string;
}

const Tunes: React.FC = () => {
	const [songs, setSongs] = useState([]);

	const handleSearch = (query: string) => {
		axios
			.get(
				`https://itunes.apple.com/search
			?term=${encodeURI(query)}
			&entity=musicTrack
			&limit=5`
			)
			.then((response) => {
				let iTunesSongs = response.data.results
					.filter((song: SongFromITunes) => song.kind === 'song')
					.map((song: SongFromITunes) => extractData(song));

				setSongs(iTunesSongs);
			});
	};

	const extractData = ({
		trackId: id,
		artistName: artist,
		previewUrl: audioFile,
		artworkUrl100: artwork,
		trackName: title,
		collectionName: album,
	}: SongFromITunes) => {
		return { id, artist, audioFile, artwork, title, album } as Song;
	};

	return (
		<article className="tunes">
			<h1>Tunes</h1>
			<TunesSearchForm onSearch={handleSearch} />
			<TunesList songs={songs} />
		</article>
	);
};

export default Tunes;
