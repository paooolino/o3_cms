import React from 'react';

import LoginForm from '../components/LoginForm';

const PLogin = () => {
	return (
		<div>
			<LoginForm 
				id="loginform" 
				lostPasswordLink="/lost-password"
			/>
		</div>
	);
};

export default PLogin;
