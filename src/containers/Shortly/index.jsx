import { useShortenURL } from '../../hooks/useShortenURL';
import { useShortenedURLs } from '../../hooks/useShortenedURLs';
import { ShortenURLForm } from '../../components/ShortenURLForm';
import { ShortenedURLCard } from '../../components/ShortenedURLCard';
import { NavMenu } from '../NavMenu';
import { Button } from '../../components/Button';
import { Header } from '../Header';
import { Hero } from '../Hero';
import { Footer } from '../Footer';

import { ReactComponent as RecognitionIcon } from '../../assets/icons/icon-brand-recognition.svg';
import { ReactComponent as RecordsIcon } from '../../assets/icons/icon-detailed-records.svg';
import { ReactComponent as CustomizableIcon } from '../../assets/icons/icon-fully-customizable.svg';
import { ReactComponent as LandingBackground } from '../../assets/illustration-working.svg';
import { InfoCard } from '../../components/InfoCard';

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
					<NavMenu></NavMenu>
					<Header></Header>
				</div>
			</header>
			<main>
				<section className='landing'>
					<div className='landing-background'>
						<LandingBackground></LandingBackground>
					</div>
					<div className='container-centered'>
						<Hero></Hero>
					</div>
				</section>
				<section className='shorten-url'>
					<div className='shorten-url-container container-centered'>
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
							<Button onClick={handleClearAllURLs}>Clear All</Button>
						</div>
					</div>
				</section>
				<section className='more-info'>
					<div className='more-info-container container-centered'>
						<div className='more-info-title'>
							<h2>Advanced Statistics</h2>
							<p className='more-info-description'>
								Track how your links are performing across the web with our
								advanced statistics dashboard.
							</p>
						</div>
						<div className='more-info-cards'>
							<InfoCard header='Brand Recognition' Icon={RecognitionIcon}>
								<p>
									Boost your brand recognition with each click. Generic links
									don’t mean a thing. Branded links help instil confidence in
									your content.
								</p>
							</InfoCard>
							<InfoCard header='Detailed Records' Icon={RecordsIcon}>
								<p>
									Gain insights into who is clicking your links. Knowing when
									and where people engage with your content helps inform better
									decisions.
								</p>
							</InfoCard>

							<InfoCard header='Fully Customizable' Icon={CustomizableIcon}>
								<p>
									Improve brand awareness and content discoverability through
									customizable links, supercharging audience engagement.
								</p>
							</InfoCard>
						</div>
					</div>
				</section>
				<section className='call-to-action'>
					<div className='call-to-action-container container-centered'>
						<h2 className='inverted'>Boost your links today</h2>
						<Button isRounded isPrimary>
							Get Started
						</Button>
					</div>
				</section>
			</main>
			<footer>
				<div className='container-centered'>
					<Footer></Footer>
				</div>
			</footer>
		</div>
	);
};
