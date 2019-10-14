import React, { Fragment, ReactNode } from 'react';

export interface Props {
	title?: ReactNode;
}

export const Facebook = (props: Props) => {
	return (
		<Fragment>
			{props.title}
			<div className="facebook-container" />
		</Fragment>
	);
};

export default Facebook;
