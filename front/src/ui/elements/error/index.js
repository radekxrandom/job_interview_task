import React from 'react';
import {RiBracesFill} from 'react-icons/ri';

const Error = () => {
	return (
		<div className='errWrap'>
			<div className='error'>
				<RiBracesFill />
				<p>Error. Try refreshing the page.</p>
			</div>
		</div>
	);
};

export default Error;
