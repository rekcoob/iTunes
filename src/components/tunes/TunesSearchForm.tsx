import React, { useState, FormEvent, ChangeEvent } from 'react';

// styles
import './TunesSearchForm.scss';

// props
interface Props {
	// function returns nothing, but send data type string
	searchQuery: string;
	onInputChange: (data: string) => void;
	onSearchFormSubmit: (data: string) => void;
}

// component
const TunesSearchForm: React.FC<Props> = (props) => {
	const { searchQuery } = props;
	// submit form
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.onSearchFormSubmit(searchQuery);
	};

	// input element
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		props.onInputChange(e.target.value);
	};

	// template
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={searchQuery}
					onChange={handleInput}
					className="search"
				/>
			</form>
		</div>
	);
};

export default TunesSearchForm;
