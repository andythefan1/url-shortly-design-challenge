import { useShortenURL } from '../../hooks/useShortenURL';
import { useShortenedURLs } from '../../hooks/useShortenedURLs';
import { ShortenURLForm } from '../../components/ShortenURLForm';
import { ShortenedURLCard } from '../../components/ShortenedURLCard';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { AppHeader } from '../AppHeader';

import './styles.css';
import { ReactComponent as LandingImage } from '../../assets/illustration-working.svg';

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
		<div className='shortly-app'>
			<header>
				<div className='container-centered'>
					<AppHeader></AppHeader>
				</div>
			</header>
			<main>
				<section className='landing'>
					<div className='container-centered grid grid--2-cols'>
						<div className=''>
							<h1>More than just shorter links</h1>
							<p>
								Build your brand's recognition and get detailed insights on how
								your links are performing.
							</p>
							<Button>Get Started</Button>
						</div>
						<div className='landing-aside'>
							<LandingImage></LandingImage>
						</div>
					</div>
				</section>
				<section className='shorten-url'>
					<div className='container-centered'>
						<ShortenURLForm
							onChange={handleURLInput}
							onSubmit={handleSubmitURL}
							url={url}
							error={error}
							label={'Shorten it!'}
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
					</div>
				</section>
				<section className='more-info'>
					<div className='container-centered'>
						<h2>Advanced Statistics</h2>
						<p>
							Track how your links are performing across the web with our
							advanced statistics dashboard.
						</p>
						<div className='more-info-cards'>
							<div className='more-info-card'>
								<h3 className='more-info-card-header'>Brand Recognition</h3>
								<p className='more-info-card-text'>
									Boost your brand recognition with each click. Generic links
									don’t mean a thing. Branded links help instil confidence in
									your content.
								</p>
							</div>
							<div className='more-info-card'>
								<h3 className='more-info-card-header'>Detailed Records</h3>
								<p className='more-info-card-text'>
									Boost your brand recognition with each click. Generic links
									don’t mean a thing. Branded links help instil confidence in
									your content.
								</p>
							</div>
							<div className='more-info-card'>
								<h3 className='more-info-card-header'>Fully Customizable</h3>
								<p className='more-info-card-text'>
									Improve brand awareness and content discoverability through
									customizable links, supercharging audience engagement.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='call-to-action'>
					<div className='container-centered'>
						<h2>Boost your links today</h2>
						<Button>Get Started</Button>
					</div>
				</section>
			</main>
			<footer>
				<div className='container-centered'>
					<Logo inverse />
					<div className='footer-links'>
						<div className='footer-link-col'>
							<div className='footer-link-header'>Features</div>
							<nav>
								<ul className='footer-link-list'>
									<li className='footer-link-text'>
										<a href='/'>Link Shortening</a>
									</li>
									<li className='footer-link-text'>
										<a href='/'>Branded Links</a>
									</li>
									<li className='footer-link-text'>
										<a href='/'>Analytics</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
