import React from 'react';

const LoginForm = () => {
	return (
		<form>
			<div>
				<input name="usr" />
			</div>
			<div>
				<input name="pwd" />
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	);
};

LoginForm.propTypes = {
	//
};

export default LoginForm;
