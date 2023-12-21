import { Button } from '../Button';

import './styles.css';

export const ShortenedURLCard = ({ header, body, onClick }) => {
	return (
		<div className='card shorten-url-card'>
			<div className='shorten-url-card-header'>
				<p>{header}</p>
			</div>
			<hr />
			<div className='shorten-url-card-body'>{body}</div>
			<Button onClick={() => onClick(header)}>Copy</Button>
		</div>
	);
};
