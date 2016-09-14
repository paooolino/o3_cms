
const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
const USRVALUE_CHANGE = 'USRVALUE_CHANGE';
const PASSVALUE_CHANGE = 'PASSVALUE_CHANGE';

export const login_submit = (usrValue, passValue) => {
	return {
		type: LOGIN_SUBMIT,
		usrValue,
		passValue
	};
};

export const usrValue_change = (v) => {
	return {
		type: USRVALUE_CHANGE,
		v
	};
};

export const passValue_change = (v) => {
	return {
		type: PASSVALUE_CHANGE,
		v
	};
};
