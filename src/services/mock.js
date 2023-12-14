// mock shorten TinyURL responses
export const fetchShortenedURL = (url) => {
	const body = JSON.stringify(shortenValidResponse);
	return new Response(body);
};

const shortenValidResponse = {
	data: {
		domain: 'tinyurl.com',
		alias: '46rp4a7w',
		deleted: false,
		archived: false,
		analytics: {
			enabled: true,
			public: false,
		},
		tags: [],
		created_at: '2023-12-06T20:50:25+00:00',
		expires_at: null,
		tiny_url: 'https://tinyurl.com/46rp4a7w',
		url: 'https://www.makeuseof.com/react-api-keys-store-access/',
	},
	code: 0,
	errors: [],
};

const shortenInvalidResponse = {
	data: [],
	code: 5,
	errors: ['Invalid URL.'],
};
