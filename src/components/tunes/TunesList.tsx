import React from 'react';
import { Song } from '../../types';
// styles
import './TunesList.scss';

// children
import TunesSong from './TunesSong';

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
				<li key={song.id}>
					<TunesSong song={song} />
				</li>
			))}
		</ul>
	);
};

export default TunesList;
