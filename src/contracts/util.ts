export const timeSinceXAgo = (date: Date): string => {
	const templates: { [key: string]: string } = {
		prefix: '',
		suffix: ' ago',
		seconds: 'some seconds',
		minute: 'about a minute',
		minutes: '%d minutes',
		hour: 'about an hour',
		hours: 'about %d hours',
		day: 'a day',
		days: '%d days',
		month: 'about a month',
		months: '%d months',
		year: 'about a year',
		years: '%d years'
	};
	const template = (key: string, value: number): string => {
		return templates[key]
			? templates[key].replace(/%d/i, Math.abs(Math.round(value)).toString())
			: '';
	};
	try {
		if (!date) {
			return '';
		}
		date = new Date(date);
		const now = new Date();
		const seconds = ((now.getTime() - date.getTime()) * 0.001) >> 0;
		const minutes = seconds / 60;
		const hours = minutes / 60;
		const days = hours / 24;
		const years = days / 365;
		return (
			templates.prefix +
			((seconds < 45 && template('seconds', seconds)) ||
				(seconds < 90 && template('minute', 1)) ||
				(minutes < 45 && template('minutes', minutes)) ||
				(minutes < 90 && template('hour', 1)) ||
				(hours < 24 && template('hours', hours)) ||
				(hours < 42 && template('day', 1)) ||
				(days < 30 && template('days', days)) ||
				(days < 45 && template('month', 1)) ||
				(days < 365 && template('months', days / 30)) ||
				(years < 1.5 && template('year', 1)) ||
				template('years', years)) +
			templates.suffix
		);
	} catch (error) {
		console.error(error);
		return '';
	}
};

export const getAvatarBackgroundColor = (avatar: string = ''): string => {
	if (avatar === null || avatar === undefined) {
		avatar = '';
	}
	if (avatar.length === 0) {
		return '#CCCCCC';
	}
	let sum = 0;
	const avatarBackgroundColors = [
		'#DAC4E1',
		'#C3D6BA',
		'#B5D8E0',
		'#DCEAB7',
		'#D3A8A8',
		'#E9CEBF',
		'#ACCAC1'
	];
	for (let i = 0; i < avatar.length; i++) {
		sum += avatar.charCodeAt(i);
	}
	return avatarBackgroundColors[sum % avatarBackgroundColors.length];
};
