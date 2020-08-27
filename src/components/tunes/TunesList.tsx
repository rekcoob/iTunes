import React, { useState } from 'react';
import { Song } from '../../types';
// styles
import './TunesSearchForm.scss';

// props
interface Props {
	// array of song objests
	// songs: { id: number; artist: string; name: string }[];
	songs: Song[];
}

// component
const TunesList: React.FC<Props> = (props) => {
	const { songs } = props;
	// template
	return (
		<ul className="tunes-list">
			{songs.map((song) => (
				<li key={song.id}>{JSON.stringify(song)}</li>
			))}
		</ul>
	);
};

export default TunesList;
