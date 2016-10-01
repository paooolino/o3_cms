import React, {PropTypes} from 'react';

const InfoMessage = (props) => (
	<div className="InfoMessage">
		<div className="message">
			{props.message}
		</div>
		<button
			name="confirm"
			onClick={props.confirm_handler}
		>
			{props.buttonText}
		</button>
	</div>
);

InfoMessage.propTypes = {
	// state
	message: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	
	// handlers
	confirm_handler: PropTypes.func.isRequired
};

export default InfoMessage;
