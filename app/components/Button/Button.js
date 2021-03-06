import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

/**
 * The only true button.
 */
export default function Button({ color, size, onClick, children, background, border }) {
	const styles = {
		color,
		fontSize: Button.sizes[size],
		background,
		border,
	};

	return <button className="button" style={styles} onClick={onClick}>{children}</button>;
}
Button.propTypes = {
	/** Button label */
	children: PropTypes.string.isRequired,
	/** The color for the button */
	color: PropTypes.string,
	/** The size of the button */
	size: PropTypes.oneOf(['small', 'normal', 'large']),
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func,
	/** BG COLOR */
	background: PropTypes.string,
	border: PropTypes.string,
};
Button.defaultProps = {
	color: '#333',
	size: 'normal',
	background: 'transparent',
	border: 'none',
	/* eslint-disable no-console */
	onClick: event => {
		console.log('You have clicked me!', event.target);
	},
	/* eslint-enable no-console */
};
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};