import React, {PropTypes} from 'react';

const LoginForm = (props) => {
	return (
			<form id={props.id} onSubmit={props.handleSubmit}>
			<div className="formRow">
				<div className="formLabel">
					user 
				</div>
				<div className="formField">
					<input name="usr" />
				</div>
			</div>
			<div className="formRow">
				<div className="formLabel">
					pwd
				</div>
				<div className="formField">
					<input type="password" name="pwd" />
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

LoginForm.propTypes = {
	id: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired
};

export default LoginForm;
