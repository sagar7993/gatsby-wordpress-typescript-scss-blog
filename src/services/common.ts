import { AxiosRequestConfig } from 'axios';

const setHeaders = (urlEncodedForm: boolean) => {
	const additionalHeaders: any = {};
	if (urlEncodedForm) {
		additionalHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
	} else {
		additionalHeaders['Content-Type'] = 'application/json';
		additionalHeaders['Accept'] = 'application/json';
	}
	return additionalHeaders;
};

export const getRequest = (
	url: string,
	data: any,
	baseURL: string,
	urlEncoded: boolean
): AxiosRequestConfig => {
	const options: AxiosRequestConfig = {
		method: 'GET',
		baseURL,
		url
	};
	if (data) {
		options.data = data;
	}
	options.headers = setHeaders(urlEncoded);
	return options;
};

export const postRequest = (
	url: string,
	data: any,
	baseURL: string,
	urlEncoded: boolean
): AxiosRequestConfig => {
	const options: AxiosRequestConfig = {
		method: 'POST',
		baseURL,
		url
	};
	if (data) {
		options.data = data;
	}
	options.headers = setHeaders(urlEncoded);
	return options;
};

export const putRequest = (
	url: string,
	data: any,
	baseURL: string,
	urlEncoded: boolean
): AxiosRequestConfig => {
	const options: AxiosRequestConfig = {
		method: 'PUT',
		baseURL,
		url
	};
	if (data) {
		options.data = data;
	}
	options.headers = setHeaders(urlEncoded);
	return options;
};

export const deleteRequest = (
	url: string,
	data: any,
	baseURL: string,
	urlEncoded: boolean
): AxiosRequestConfig => {
	const options: AxiosRequestConfig = {
		method: 'DELETE',
		baseURL,
		url
	};
	if (data) {
		options.data = data;
	}
	options.headers = setHeaders(urlEncoded);
	return options;
};

export const patchRequest = (
	url: string,
	data: any,
	baseURL: string,
	urlEncoded: boolean
): AxiosRequestConfig => {
	const options: AxiosRequestConfig = {
		method: 'PATCH',
		baseURL,
		url
	};
	if (data) {
		options.data = data;
	}
	options.headers = setHeaders(urlEncoded);
	return options;
};
