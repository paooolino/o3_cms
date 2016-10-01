import React, {PropTypes} from 'react';

const LostPasswordForm = (props) => {
	return (
		<div className="lostPasswordForm">
			<div className="formRow">
				<div className="formLabel">
					email
				</div>
				<div className="formField">
					<input name="email" 
						value={props.controlledFieldsValues.email}
						onChange={props.controlled_fields_handler}
					/>
				</div>
			</div>
			<div className="formRow">
				<div className="formField">
					<button 
						disabled={props.isSubmitting ? 'disabled' : false} 
						onClick={props.submit_handler} 
						name="send"
					>
						Send
					</button>
					{props.isSubmitting && <img className="loadingIcon" src="/images/loadingIcon.png" />}
					{props.errorMessage != '' && <div className="errorMessage">{props.errorMessage}</div> }
				</div>
			</div>
		</div>
	);
};

LostPasswordForm.propTypes = {
	// state
	isSubmitting: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string.isRequired,
	controlledFieldsValues: PropTypes.shape({
		email: PropTypes.string.isRequired
	}).isRequired,
	
	// handlers
	controlled_fields_handler: PropTypes.func.isRequired,
	submit_handler: PropTypes.func.isRequired
};

export default LostPasswordForm;
