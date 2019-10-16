import React, { RefObject, useState, useEffect } from 'react';

import './ReadingProgressBar.scss';

export const ReadingProgressBar = ({ target }: { target: RefObject<HTMLElement> }) => {
	const [readingProgressPercentage, setReadingProgressPercentage] = useState(0);
	const scrollListener = () => {
		if (!target.current) {
			return;
		}
		const element = target.current;
		const totalHeight = element.clientHeight - element.offsetTop - (window.innerHeight);
		const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if (windowScrollTop === 0) {
			return setReadingProgressPercentage(0);
		}
		if (windowScrollTop > totalHeight) {
			return setReadingProgressPercentage(100);
		}
		setReadingProgressPercentage((windowScrollTop / totalHeight) * 100);
	};
	useEffect(() => {
		window.addEventListener('scroll', scrollListener);
		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	});
	return <div className="reading-progress-bar" style={{ width: `${readingProgressPercentage}%` }} />;
};

export default ReadingProgressBar;
