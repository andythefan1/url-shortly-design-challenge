import { useShortenURL } from '../../hooks/useShortenURL';
import { useShortenedURLs } from '../../hooks/useShortenedURLs';
import { ShortenURLForm } from '../../components/ShortenURLForm';
import { ShortenedURLCard } from '../../components/ShortenedURLCard';

import { getShortenedURL } from '../../services/shortenURLService';
export const Shortly = () => {
	const { url, setURL, error, setError } = useShortenURL();
	const { shortenedURLs, setShortenedURLs } = useShortenedURLs();

	const onURLInput = (e) => {
		const URLInput = e.target.value;
		setURL(URLInput);
	};

	const onSubmitShortenURL = async () => {
		try {
			setError();
			const shortenedURL = await getShortenedURL(url);
			const updatedShortenedURLs = [shortenedURL, ...shortenedURLs];
			setShortenedURLs(updatedShortenedURLs);
		} catch (e) {
			setError('Please add a link');
			console.error('Could not fetch shortened URL \n', e);
		}
	};

	console.info('shortenedURLs', shortenedURLs);
	return (
		<>
			{/* <header>
				Header
				<Logo></Logo>
			</header> */}
			<main>
				{/* <section>Landing</section> */}
				<section className='shorten-url'>
					Shorten URL
					<ShortenURLForm
						onChange={onURLInput}
						onSubmit={onSubmitShortenURL}
						url={url}
						error={error}
					></ShortenURLForm>
					<div>
						{shortenedURLs.map((shortenedURL, i) => (
							<ShortenedURLCard
								key={i}
								header={shortenedURL.originalURL}
								body={shortenedURL.shortURL}
							></ShortenedURLCard>
						))}
					</div>
				</section>
				{/* <section>MoreInfo</section>
				<section>CTA</section> */}
			</main>
			{/* <footer>
				Footer
				<Logo inverse />
			</footer> */}
		</>
	);
};
