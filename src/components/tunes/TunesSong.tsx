import React, { useMemo, useEffect } from 'react';
import { Song } from '../../types';
import { truncate } from 'lodash-es';

// styles
import './TunesSong.scss';

// props
interface Props {
	song: Song;
}

// component
const TunesSong: React.FC<Props> = (props) => {
	const { song } = props;

	// make it pretty
	// songify - 100 characters + ...
	// useMemo makes function only change when title or artist changed
	// 1st param function to fire, 2nd params - items to change
	const songify = useMemo(
		() => (song: Song): string => {
			const newTitle = song.artist + ' - ' + song.title;
			return shorten(newTitle, 100);
		},
		[song.title, song.artist]
	);

	// side effect
	// only do once, when componentdidmount, [] makes it once
	useEffect(() => {
		fetch('https://api.myjson.com/bins/zg7ze')
			.then((res) => res.json())
			.then(console.log);
	}, []);

	// if len not set - default 55
	// shorten - 55 characters + ...
	const shorten = (str: string, len = 55): string => {
		// truncate: add ... on end
		return truncate(str, { length: len });
	};

	// template
	return (
		<article className="song">
			<div className="inside">
				<h2>{songify(song)}</h2>
				<div className="player">
					{song.artwork && <img src={song.artwork} alt="album art" />}
					<audio controls src={song.audioFile} />
				</div>
			</div>
			<footer className="meta">{shorten(song.album)}</footer>
		</article>
	);
};

export default TunesSong;
