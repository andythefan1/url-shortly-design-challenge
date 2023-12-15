import { getShortenedURL } from '../services/shortenURLService';

import { useState } from 'react';

export const useShortenURL = () => {
	const [url, setURL] = useState('');
	const [error, setError] = useState('');

	const fetchShortenedURL = async () => {
		try {
			setError();
			const shortenedURL = await getShortenedURL(url);
			setURL('');
			return shortenedURL;
		} catch (error) {
			setError('Please add a link');
			throw new Error(error.message);
		}
	};
	return {
		url,
		setURL,
		error,
		setError,
		fetchShortenedURL,
	};
};
