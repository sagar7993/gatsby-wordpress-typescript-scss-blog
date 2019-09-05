export const replaceUrlsIfLocalhost = (text: string): string => {
	if (window && window.location && window.location.hostname === 'localhost') {
		text = text.replace(/http\:\/\/www.onmycanvas.com\//g, 'http://localhost:8000/post/');
		text = text.replace(/https\:\/\/www.onmycanvas.com\//g, 'http://localhost:8000/post/');
	}
	return text;
};
