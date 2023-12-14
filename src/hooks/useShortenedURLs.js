import { getURLList, setURLList } from '../services/storageService';
import { useEffect, useState } from 'react';

export const useShortenedURLs = (urls) => {
	const storedURLs = getURLList();
	const [shortenedURLs, setShortenedURLs] = useState(storedURLs);

	useEffect(() => {
		setURLList(shortenedURLs);
		console.info('localStorage: ', getURLList());
	}, [shortenedURLs]);

	return { shortenedURLs, setShortenedURLs };
};
