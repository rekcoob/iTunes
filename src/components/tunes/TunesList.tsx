import React from 'react';
import { Song } from '../../types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './TunesList.scss';
import TunesSong from './TunesSong';

interface Props {
	songs: Song[];
}

const TunesList: React.FC<Props> = (props) => {
	const { songs } = props;

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
