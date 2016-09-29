import React, {PropTypes} from 'react';

const LoginForm = (props) => (
	<div className={props.className}>
		<div className="formRow">
			<div className="formLabel">
				user 
			</div>
			<div className="formField">
				<input name="user" 
					value={props.controlledFieldsValues.user}
					onChange={props.controlled_fields_handler}
				/>
			</div>
		</div>
		<div className="formRow">
			<div className="formLabel">
				pwd
			</div>
			<div className="formField">
				<input type="password" name="pass" 
					value={props.controlledFieldsValues.pass}
					onChange={props.controlled_fields_handler}
				/>
			</div>
		</div>
		<div className="formRow">
			<div className="formField">
				<button 
					disabled={props.isSubmitting ? 'disabled' : false} 
					name="login"
					onClick={() => { props.submit_handler(props.usrValue, props.passValue); }}
				>
					Send
				</button>
				{props.isSubmitting && <img className="loadingIcon" src="images/loadingIcon.png" />}
				{props.isError && <div className="errorMessage">{props.errorMessage}</div> }
			</div>
		</div>
		<div className="formRow">
			{props.lostPasswordLink}
		</div>
	</div>
);

LoginForm.propTypes = {
	// ownProps
	className: PropTypes.string.isRequired,
	lostPasswordLink: PropTypes.object.isRequired,
	
	// state
	isSubmitting: PropTypes.bool.isRequired,
	isError: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string.isRequired,
	controlledFieldsValues: PropTypes.shape({
		user: PropTypes.string.isRequired,
		pass: PropTypes.string.isRequired
	}).isRequired,
	
	// handlers
	submit_handler: PropTypes.func.isRequired,
	controlled_fields_handler: PropTypes.func.isRequired
};

export default LoginForm;
