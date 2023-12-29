import './styles.css';

export const ShortenedURLCard = ({ header, children }) => {
	return (
		<div className='card shorten-url-card'>
			<div className='shorten-url-card-header'>
				<p>{header}</p>
			</div>
			<hr />
			<div className='shorten-url-card-body'>{children}</div>
		</div>
	);
};
