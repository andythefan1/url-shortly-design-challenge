import { SubmitButton } from '../SubmitButton';

import './styles.css';

export const ShortenedURLCard = ({ header, body }) => {
	return (
		<div className='shorten-url-card'>
			<div className='shorten-url-card-header'>
				<p>{header}</p>
			</div>
			<hr />
			<div className='shorten-url-card-body'>{body}</div>
			<SubmitButton>Copy</SubmitButton>
		</div>
	);
};
