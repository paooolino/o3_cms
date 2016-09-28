import React, {PropTypes} from 'react';

const LoginForm = (props) => (
	<form id={props.id} onSubmit={(evt) => {
			evt.preventDefault();
			props.handle_login_submit(props.usrValue, props.passValue)}
		}>
		<div className="formRow">
			<div className="formLabel">
				user 
			</div>
			<div className="formField">
				<input name="usr" 
					value={props.usrValue}
					onChange={props.handle_usrValue_change}
				/>
			</div>
		</div>
		<div className="formRow">
			<div className="formLabel">
				pwd
			</div>
			<div className="formField">
				<input type="password" name="pwd" 
					value={props.passValue}
					onChange={props.handle_passValue_change}
				/>
			</div>
		</div>
		<div className="formRow">
			<div className="formField">
				<button>Send</button>
			</div>
		</div>
		<div className="formRow">
			{props.lostPasswordLink}
		</div>
	</form>
);

LoginForm.propTypes = {
	// ownProps
	id: PropTypes.string.isRequired,
	lostPasswordLink: PropTypes.string.isRequired,
	
	// state
	usrValue: PropTypes.string.isRequired,
	passValue: PropTypes.string.isRequired,
	
	// handlers
	handle_login_submit: PropTypes.func.isRequired,
	handle_usrValue_change: PropTypes.func.isRequired,
	handle_passValue_change: PropTypes.func.isRequired
};

export default LoginForm;
