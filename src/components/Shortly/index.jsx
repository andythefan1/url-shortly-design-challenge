import { useShortenURL } from '../../hooks/useShortenURL';
import { useShortenedURLs } from '../../hooks/useShortenedURLs';
import { ShortenURLForm } from '../ShortenURLForm';
import { ShortenedURLCard } from '../ShortenedURLCard';

export const Shortly = () => {
	const { url, setURL, error, submitShortenURL } = useShortenURL();
	const { shortenedURLs, setShortenedURLs } = useShortenedURLs();

	const onSubmitShortenURL = async () => {
		const shortenedURL = await submitShortenURL(url);
		const updatedShortenedURLs = [...shortenedURLs, shortenedURL];
		debugger;
		setShortenedURLs(updatedShortenedURLs);
	};
	console.info(url, shortenedURLs);
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
