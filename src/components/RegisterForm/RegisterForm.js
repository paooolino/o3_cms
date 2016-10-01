import React, {PropTypes} from 'react';

const RegisterForm = (props) => {
	return (
		<div className="registerForm">
			<div className="formRow">
				<div className="formLabel">
					username
				</div>
				<div className="formField">
					<input name="email" 
						value={props.controlledFieldsValues.email}
						onChange={props.controlled_fields_handler}
					/>
				</div>
			</div>
			<div className="formRow">
				<div className="formLabel">
					password
				</div>
				<div className="formField">
					<input type="password" name="pass" 
						value={props.controlledFieldsValues.pass}
						onChange={props.controlled_fields_handler}
					/>
				</div>
			</div>
			<div className="formRow">
				<div className="formLabel">
					repeat password
				</div>
				<div className="formField">
					<input type="password" name="pass2" 
						value={props.controlledFieldsValues.pass2}
						onChange={props.controlled_fields_handler}
					/>
				</div>
			</div>
			<div className="formRow">
				<div className="formField">
					<button 
						disabled={props.isSubmitting ? 'disabled' : false} 
						onClick={props.submit_handler} 
						name="register"
					>
						Send
					</button>
					{props.isSubmitting && <img className="loadingIcon" src="/images/loadingIcon.png" />}
					{props.errorMessage != '' && <div className="errorMessage">{props.errorMessage}</div>}
				</div>
			</div>
		</div>
	);
};

RegisterForm.propTypes = {
	// state
	isSubmitting: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string.isRequired,
	controlledFieldsValues: PropTypes.shape({
		email: PropTypes.string.isRequired,
		pass: PropTypes.string.isRequired,
		pass2: PropTypes.string.isRequired
	}).isRequired,
		
	// handlers
	submit_handler: PropTypes.func.isRequired,
	controlled_fields_handler: PropTypes.func.isRequired
};

export default RegisterForm;
