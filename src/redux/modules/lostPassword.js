/*
	action string constants
*/

const SUBMIT = 'login/SUBMIT';
const USRVALUE_CHANGE = 'login/USRVALUE_CHANGE';
const PASSVALUE_CHANGE = 'login/PASSVALUE_CHANGE';

/*
	reducer
*/

const initialState = {
	usrValue: '',
	passValue: ''
};

export default (state=initialState, action) => {
	switch(action.type) {
		case SUBMIT:
			return state;
		
		case USRVALUE_CHANGE:
			return Object.assign({}, state, {
				usrValue: action.v
			});
			
		case PASSVALUE_CHANGE:
			return Object.assign({}, state, {
				passValue: action.v
			});
			
		default:
			return state;
	}
};

/*
	action creators
*/

export const login_submit = (usrValue, passValue) => {
	return {
		type: SUBMIT,
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