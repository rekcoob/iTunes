import React, { useRef, FormEvent, ChangeEvent } from 'react';
import { debounce } from 'lodash-es';
import './TunesSearchForm.scss';

interface Props {
	onSearch: (query: string) => void;
}

const TunesSearchForm: React.FC<Props> = (props) => {
	const searchInput = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		searchForMusic();
	};

	const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
		searchForMusic();
	}, 500);

	const searchForMusic = () => {
		let searchString = searchInput.current?.value;
		if (searchString) props.onSearch(searchString);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					autoFocus
					type="text"
					ref={searchInput}
					onChange={handleInput}
					className="search"
				/>
			</form>
		</div>
	);
};

export default TunesSearchForm;
