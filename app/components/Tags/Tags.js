import React from 'react';
import PropTypes from 'prop-types';

import './Tags.css';

/**
 * The only true button.
 */
export default function Tag({ color, size, onClick, children, background, border, textTransform, fontSize }) {
	const styles = {
		color,
		fontSize,
		background,
		border,
		textTransform,
	};

	return <span className="tags" style={styles} onClick={onClick}>{children}</span>;
}
Tag.propTypes = {
	/** Tag label */
	children: PropTypes.string.isRequired,
	/** The color for the button */
	color: PropTypes.string,
	/** The size of the button */
	fontSize: PropTypes.string,
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func,
	/** BG COLOR */
	background: PropTypes.string,
	border: PropTypes.string,
	textTransform: PropTypes.string,
};
Tag.defaultProps = {
	color: '#333',
	size: 'normal',
	background: 'transparent',
	border: 'none',
	/* eslint-disable no-console */
	onClick: event => {
		console.log('You have clicked me!', event.target);
	},
	textTransform: 'inherit'
	/* eslint-enable no-console */
};
Tag.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};