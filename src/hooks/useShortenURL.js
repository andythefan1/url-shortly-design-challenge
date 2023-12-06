import { useState } from 'react';

import { getShortenedURL } from '../service/shortenURL';

export const useShortenURL = () => {
	const [url, setURL] = useState();
	const [error, setError] = useState();

	const submitShortenURL = async () => {
		try {
			const shortenedURL = await getShortenedURL(url);

			setError();
			return shortenedURL;
		} catch (e) {
			setError('Please add a link');
			console.error('Could not fetch shortened URL \n', e);
		} finally {
		}
	};

	return {
		url,
		setURL,
		error,
		submitShortenURL,
	};
};
