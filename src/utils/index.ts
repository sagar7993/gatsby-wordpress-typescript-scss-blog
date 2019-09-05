export const decodeHtmlCharCodes = (html: string): string => {
	try {
		return html.replace(/(&#(\d+);)/g, (_match, _capture, charCode) => {
			return String.fromCharCode(charCode);
		});
	} catch (error) {
		console.error(error);
	}
	return html;
};
