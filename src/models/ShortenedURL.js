export class ShortenedURL {
	#originalURL;
	#shortURL;

	constructor(originalURL, shortURL) {
		this.#originalURL = originalURL;
		this.#shortURL = shortURL;
	}

	set originalURL(url) {
		this.#originalURL = url;
	}

	set shortenedURL(url) {
		this.#shortURL = url;
	}

	get originalURL() {
		return this.#originalURL;
	}

	get shortURL() {
		return this.#shortURL;
	}
}
