import { ShortenedURL } from '../models/ShortenedURL';

export const getURLList = () => {
	const urlList = localStorage.getItem('shortenedURLs')
		? JSON.parse(localStorage.getItem('shortenedURLs'))
		: [];
	const urls = urlList.map((shortenedURL) => {
		return ShortenedURL.fromJSON(shortenedURL);
	});

	return urls;
};

export const setURLList = (urlList) => {
	const shortenedURLJSON = JSON.stringify(urlList);
	localStorage.setItem('shortenedURLs', shortenedURLJSON);
};
