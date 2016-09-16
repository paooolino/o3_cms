/*
  internal imports
*/

import * as actions from './actionTypes';

export const login_submit = (usrValue, passValue) => {
	return {
		type: actions.LOGIN_SUBMIT,
		usrValue,
		passValue
	};
};

export const usrValue_change = (v) => {
	return {
		type: actions.USRVALUE_CHANGE,
		v
	};
};

export const passValue_change = (v) => {
	return {
		type: actions.PASSVALUE_CHANGE,
		v
	};
};
