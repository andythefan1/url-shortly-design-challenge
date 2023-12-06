import { ShortenedURL } from '../models/ShortenedURL';

import { fetchShortenedURL } from './mock';
import { URLS } from '../utils/constants';

export const getShortenedURL = async (url) => {
	try {
		const response = await fetchShortenedURL(url);
		const body = await response.json();

		// check for valid response
		if (body.code === 0) {
			const shortURL = body.data.tiny_url;
			const originalURL = body.data.url;
			return new ShortenedURL(originalURL, shortURL);
		} else {
			throw new Error(body.errors);
		}
	} catch (error) {
		throw new Error(error);
	}
};
