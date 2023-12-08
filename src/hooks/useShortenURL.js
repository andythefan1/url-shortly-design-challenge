import { useState } from 'react';

export const useShortenURL = () => {
	const [url, setURL] = useState('');
	const [error, setError] = useState('');

	return {
		url,
		setURL,
		error,
		setError,
	};
};
