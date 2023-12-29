import { Button } from '../Button';
import './styles.css';

export const ShortenedURLCard = ({ header, onClick, body }) => {
	return (
		<div className='card shorten-url-card'>
			<div className='shorten-url-card-header'>{header}</div>

			<div className='shorten-url-card-body'>
				<a className='shorten-url-link' href={body}>
					{body}
				</a>
				<Button onClick={() => onClick(body)}>Copy</Button>
			</div>
		</div>
	);
};
