import React from 'react';

const LoginForm = () => {
	return (
		<form>
			<div>
				user <input name="usr" />
			</div>
			<div>
				pwd <input name="pwd" />
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
