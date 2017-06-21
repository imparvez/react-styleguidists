import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

/**
 * The only true button.
 */
export default function Header({ color, fontSize, onClick, children }) {
	const styles = {
		color,
		fontSize,
	};

	return <h2 className="header" style={styles} onClick={onClick}>{children}</h2>;
}
Header.propTypes = {
	/** Header label */
	children: PropTypes.string.isRequired,
	/** The color for the button */
	color: PropTypes.string,
	/** The size of the button */
	fontSize: PropTypes.string,
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func,
};
Header.defaultProps = {
	color: '#333',
	fontSize: '1rem',
	/* eslint-disable no-console */
	onClick: event => {
		console.log('You have clicked me!', event.target);
	},
	/* eslint-enable no-console */
};
Header.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};