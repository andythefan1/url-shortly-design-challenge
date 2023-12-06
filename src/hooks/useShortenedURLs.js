import { useState } from 'react';

export const useShortenedURLs = (urls) => {
	const [shortenedURLs, setShortenedURLs] = useState([]);

	return { shortenedURLs, setShortenedURLs };
};
