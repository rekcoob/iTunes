import React from 'react';
import { Song } from '../../types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
		<TransitionGroup component="ul" className="tunes-list">
			{songs.map((song) => (
				<CSSTransition key={song.id} timeout={200} classNames="song">
					<li key={song.id}>
						<TunesSong song={song} />
					</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};

export default TunesList;
