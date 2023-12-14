import { ShortenedURL } from '../models/ShortenedURL';

// import { fetchShortenedURL } from './mock';

export const getShortenedURL = async (url) => {
	try {
		const shortenURLEndpoint =
			process.env.REACT_APP_SHORTEN_URL_URI +
			process.env.REACT_APP_SHORTEN_URL_ENDPOINT;

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.REACT_APP_TINY_URL_API_KEY}`,
			},
			body: JSON.stringify({
				url: url,
			}),
		};

		const response = await fetch(shortenURLEndpoint, options);
		const body = await response.json();

		// check for valid response
		if (body.code === 0) {
			const shortURL = body.data.tiny_url;
			const originalURL = body.data.url;
			return new ShortenedURL(originalURL, shortURL);
		} else {
			// throw internal error
			throw new Error(`Internal error: ${body.errors}`);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};

export const getShortenedURLs = async () => {};
