import { useShortenURL } from '../../hooks/useShortenURL';
import { useShortenedURLs } from '../../hooks/useShortenedURLs';
import { ShortenURLForm } from '../../components/ShortenURLForm';
import { ShortenedURLCard } from '../../components/ShortenedURLCard';

import './styles.css';

export const Shortly = () => {
	const { url, setURL, error, fetchShortenedURL } = useShortenURL();
	const { shortenedURLs, setShortenedURLs } = useShortenedURLs();

	const handleURLInput = (e) => {
		const URLInput = e.target.value;
		setURL(URLInput);
	};

	const handleSubmitURL = async () => {
		try {
			const shortenedURL = await fetchShortenedURL(url);
			const updatedShortenedURLs = [shortenedURL, ...shortenedURLs];
			setShortenedURLs(updatedShortenedURLs);
			setURL('');
			console.info(`handleSubmitURL: ${url}`);
		} catch (error) {
			console.error('Could not fetch shortened URL \n', error);
		}
	};

	const handleClearAllURLs = () => {
		setShortenedURLs([]);
	};

	const handleCopyURL = async (value) => {
		try {
			if (value.length > 0) {
				await navigator.clipboard.writeText(value);
			}
		} catch (error) {
			console.info(
				'Clipboard was empty or there was a problem with browser permission'
			);
		}
	};

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
						onChange={handleURLInput}
						onSubmit={handleSubmitURL}
						url={url}
						error={error}
					></ShortenURLForm>
					<div className='shorten-url-list'>
						{shortenedURLs.map((shortenedURL, i) => (
							<ShortenedURLCard
								key={i}
								header={shortenedURL.originalURL}
								body={shortenedURL.shortURL}
								onClick={handleCopyURL}
							></ShortenedURLCard>
						))}
						<button onClick={handleClearAllURLs}>clear all</button>
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
