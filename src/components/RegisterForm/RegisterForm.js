import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const RegisterForm = (props) => {
	return (
		<form id={props.id} onSubmit={(evt) => {
				evt.preventDefault();
				props.handle_register_submit(
					usrValue: props.usrValue, 
					passValue: props.passValue,
					pass2Value: props.pass2Value
				)}
			}>
			<div className="formRow">
				<div className="formLabel">
					username
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
					password
				</div>
				<div className="formField">
					<input type="password" name="pwd" 
						value={props.passValue}
						onChange={props.handle_passValue_change}
					/>
				</div>
			</div>
			<div className="formRow">
				<div className="formLabel">
					repeat password
				</div>
				<div className="formField">
					<input type="password" name="pwd2" 
						value={props.pass2Value}
						onChange={props.handle_pass2Value_change}
					/>
				</div>
			</div>
			<div className="formRow">
				<div className="formField">
					<button>Send</button>
				</div>
			</div>
		</form>
	);
};

RegisterForm.propTypes = {
	// ownProps
	id: PropTypes.string.isRequired,
	
	// state
	usrValue: PropTypes.string.isRequired,
	passValue: PropTypes.string.isRequired,
	pass2Value: PropTypes.string.isRequired,
	
	// handlers
	handle_register_submit: PropTypes.func.isRequired,
	handle_usrValue_change: PropTypes.func.isRequired,
	handle_passValue_change: PropTypes.func.isRequired,
	handle_pass2Value_change: PropTypes.func.isRequired
};

export default RegisterForm;
