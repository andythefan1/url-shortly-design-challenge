import { Button } from '../Button';
import { useState } from 'react';
import './styles.css';

export const ShortenedURLCard = ({ header, onClick, body }) => {
	const [isDisabled, setDisabled] = useState(false);
	const handleClickCopy = (e) => {
		e.preventDefault();
		setDisabled(true);

		onClick(body);
	};

	return (
		<div className='card shorten-url-card'>
			<div className='shorten-url-card-header'>{header}</div>
			<hr />
			<div className='shorten-url-card-body'>
				<a className='shorten-url-link' href={body}>
					{body}
				</a>
				<Button isDisabled={isDisabled} onClick={handleClickCopy}>
					{isDisabled ? 'Copied!' : 'Copy'}
				</Button>
			</div>
		</div>
	);
};
